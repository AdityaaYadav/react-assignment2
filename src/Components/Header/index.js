import React from "react";
import CouponModal from "../CouponModal";

const Header = () => {
  return (
    <div className=" header-wraper">
      <div className="main-info">
        <h1 className="text-center">Products</h1>
       
      <CouponModal/>
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Product ID MSS</h5>
              <p className="card-text">managed security services</p>
              <p className="card-text">
                <small className="text-muted">$2549</small>
              </p>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Product ID e&i</h5>
              <p className="card-text">Engineering & intigration </p>
              <p className="card-text">
                <small className="text-muted">$1025</small>
              </p>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Product ID</h5>
              <p className="card-text">Training</p>
              <p className="card-text">
                <small className="text-muted">$100</small>
              </p>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
