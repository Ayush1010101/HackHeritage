import React from 'react';

const CourseBox = () => {
  return (
    <section className="main-course">
      <h1>My History</h1>
      <div className="course-box">
        <ul>
          <li className="active">Records</li>
          <li>Prescriptions</li>
          <li>Doctors</li>
          <li>Medicines</li>
        </ul>
        <div className="course">
          <div className="box">
            <h3>Reports</h3>
            <p>You are making some great progress, keep it up and do remember to take your meds on time.</p>
            <button>View</button>
          </div>
          <div className="box">
            <h3>Treatments</h3>
            <p>50% - progress</p>
            <button>View</button>
          </div>
          <div className="box">
            <h3>Tests Pending</h3>
            <p>none</p>
            <button>View</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseBox;

