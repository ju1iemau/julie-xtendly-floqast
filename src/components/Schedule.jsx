import React from "react";

function Schedule() {
  return (
    <div className="schedule-box m-auto">
      <div className="row">
        <div class="col-md-4 green-box d-flex flex-column justify-content-center text-center text-white pt-4 pb-4 ps-3 pe-3">
          <h3 className="text-uppercase">Schedule a Demo</h3>
          <p>Learn More About FloQast.</p>
        </div>
        <div className="col-md-8 white-box p-3">
          <p className="text-center mb-2">
            Learn How FloQast Can{" "}
            <span className="green-text">Improve Your Month-End</span>
          </p>
          {/* FORM */}
          <div className="row m-auto">
            <div className="col-md p-1">
              <input
                type="text"
                className="form-control pt-1 pb-1"
                placeholder="First Name*"
                aria-label="First name"
                required
              />
            </div>
            <div className="col-md p-1">
              <input
                type="email"
                className="form-control pt-1 pb-1"
                placeholder="Email*"
                aria-label="Email"
                required
              />
            </div>
            <div className="col-md p-1">
              <button
                type="submit"
                className="btn btn-primary text-uppercase text-white m-auto w-100 pe-4 ps-4 pt-1 pb-1"
              >
                Schedule Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
