import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const CouponModal = (props) => {
  const { setCouponCode, totalAmount } = props;
  const [show, setShow] = useState(false);
  const [coupon, setCoupon] = useState(0);
  const handleClose = () => {
    setCouponCode(coupon);
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleCoupon = (e) => {
    const { value } = e.target;
    console.log("value",value, coupon === 15)
    setCoupon(value);
  };

  return (
    <>
      <h5 onClick={handleShow} style={{ color: "blue", cursor: "pointer" }}>
        Apply Coupon
      </h5>
      <Modal isOpen={show} toggle={handleShow}>
        <ModalHeader>Coupon Code</ModalHeader>
        <ModalBody>
          <div className="d-grid gap-3">
            <div className="p-2 custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                id="coupon_1 "
                name="coupon"
                value={10}
                checked={coupon == 10}
                onChange={(e) => handleCoupon(e)}
                disabled={totalAmount < 5000}
              />
              <label
                className="custom-control-label"
                for="coupon_1"
                style={{ marginLeft: 10 }}
              >
                10% discount for orders above $5000{" "}
                {totalAmount < 5000 && (
                  <span style={{ color: "red", marginLeft: 10, fontSize: 10 }}>
                    (Not Applicable)
                  </span>
                )}
              </label>
            </div>
            <div className="p-2 custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                id="coupon_2"
                name="coupon"
                value={15}
                checked={coupon == 15}
                onChange={(e) => handleCoupon(e)}
                disabled={totalAmount < 10000}
              />
              <label
                className="custom-control-label"
                for="coupon_2"
                style={{ marginLeft: 10 }}
              >
                15% discount for orders above $10000
                {totalAmount < 10000 && (
                  <span style={{ color: "red", marginLeft: 10, fontSize: 10 }}>
                    (Not Applicable)
                  </span>
                )}
              </label>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleClose}>
            Done
          </Button>{" "}
          <Button color="danger" onClick={handleClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CouponModal;
