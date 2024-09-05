const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

console.log(GOOGLE_API_KEY)

if (!GOOGLE_API_KEY) {
    console.error("Error: GOOGLE_API_KEY is not set in the .env file.");
    process.exit(1); // Exit the application if the API key is missing
}

let hospitals = [];

// Function to load and process the CSV file
function loadHospitalData() {
    const csvFilePath = path.join(__dirname, 'Hospital_Ratings3.csv');
    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
            hospitals.push(row);
        })
        .on('end', async () => {
            console.log('CSV file successfully processed');
            await geocodeHospitals();  // Geocode hospital addresses after loading data
        });
}

// Function to geocode hospital addresses
async function geocodeHospitals() {
    for (let hospital of hospitals) {
        try {
            const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: hospital.Address,
                    key: GOOGLE_API_KEY
                }
            });

            if (response.data.status === 'OK') {
                hospital.location = response.data.results[0].geometry.location;
            } else {
                console.error(`Geocoding failed for "${hospital.Address}" with status:`, response.data.status);
            }
        } catch (error) {
            console.error(`Error during geocoding "${hospital.Address}":`, error.message);
        }
    }
}

// Function to calculate distance between two locations using the Haversine formula
function calculateDistance(location1, location2) {
    const toRadians = (degrees) => degrees * (Math.PI / 180);

    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(location2.lat - location1.lat);
    const dLon = toRadians(location2.lng - location1.lng);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(location1.lat)) * Math.cos(toRadians(location2.lat)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

// Root route to handle the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Hospital Recommendation System API');
});

// Endpoint for recommendations
app.post('/recommend', async (req, res) => {
    try {
        const patientAddress = req.body.address;

        if (!patientAddress) {
            return res.status(400).json({ error: "Patient address is required" });
        }

        // Geocode the patient's address
        const patientLocationResponse = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: patientAddress,
                key: GOOGLE_API_KEY
            }
        });

        if (patientLocationResponse.data.status !== 'OK') {
            return res.status(400).json({ error: `Geocoding failed for address: ${patientAddress}` });
        }

        const patientLocation = patientLocationResponse.data.results[0].geometry.location;

        // Calculate distances and get top hospitals
        const recommendations = hospitals
            .filter(hospital => hospital.location)
            .map(hospital => ({
                name: hospital.HospitalName,
                address: hospital.Address,
                rating: parseFloat(hospital.Rating),
                distance: calculateDistance(patientLocation, hospital.location)
            }))
            .sort((a, b) => a.distance - b.distance || b.rating - a.rating) // Sort by distance, then by rating

        res.status(200).json(recommendations.slice(0, 5)); // Return top 5 recommendations

    } catch (error) {
        console.error("Error processing recommendation:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    loadHospitalData(); // Load the hospital data when the server starts
});



