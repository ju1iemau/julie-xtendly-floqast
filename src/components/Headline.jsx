import React from "react";

function Headline() {
  return (
    <div className="headline mt-5 mb-5 p-3 pt-md-4 pb-xl-4 pe-xl-5 w-50">
      <div className="headline-logo d-flex align-items-end">
        <img
          src="https://drive.google.com/uc?id=1OJ-YFx-F-58NQdWJQKkr1k_S2pfdwkUa"
          alt="FloQast - Logo"
        />
        <p className="subheading ms-2">
          <em>The</em>
        </p>
      </div>
      <div className="headline-text mt-2">
        <p className="d-block">
          <span className="d-block main-heading">
            <em>Fastest, Most Accurate</em>
          </span>
          <span className="subheading">
            <em>Way to Close Your Books!</em>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Headline;
