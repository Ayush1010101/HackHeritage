import React from "react";
import "./Personal_details.scss" ;
function PersonalDetails() {
  return (
    <div className="container light-style flex-grow-1 container-p-y">
      <h4 className="font-weight-bold py-3 mb-4">Personal-Details</h4>
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <a
                className="list-group-item list-group-item-action active"
                data-toggle="list"
                href="#account-general"
              >
                Patient's Info
              </a>
              <a
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href="#account-change-password"
              >
                Book a Bed
              </a>
              <a
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href="#account-info"
              >
                Book Hospital Visit
              </a>
              <a
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href="#account-social-links"
              >
                Buy Medicines
              </a>
              <a
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href="#account-connections"
              >
                Call an Ambulance
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="account-general">
                <div className="card-body media align-items-center">
                  <img
                    src="images/user.jpg"
                    alt="User"
                    className="d-block ui-w-80"
                  />
                  <div className="media-body ml-4">
                    <label className="btn btn-outline-primary">
                      Upload new photo
                      <input
                        type="file"
                        className="account-settings-fileinput"
                      />
                    </label>
                    &nbsp;
                    <button type="button" className="btn btn-default md-btn-flat">
                      Reset
                    </button>
                    <div className="text small mt-1">
                      Allowed JPG, GIF or PNG. Max size of 800K
                    </div>
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label">Patient's Name</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Insurance ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Insurance-id"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Medical History (if any)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Medical-History"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email-id</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="xyz@gmail.com"
                    />
                    <div className="alert alert-warning mt-3">
                      Your email is not confirmed. Please check your inbox.
                      <br />
                      <a href="javascript:void(0)">Resend OTP</a>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mobile No.</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="9999-88888"
                      />
                      <div className="alert alert-warning mt-3">
                        Your Mobile number is not confirmed. Please check your
                        messages.
                        <br />
                        <a href="javascript:void(0)">Resend OTP</a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Patient's Aadhar Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Aadhar No."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mt-3">
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
        &nbsp;
        <button type="button" className="btn btn-default">Cancel</button>
      </div>
    </div>
  );
}

export default PersonalDetails;
