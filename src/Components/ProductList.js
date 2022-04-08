import React, { useState } from "react";
import { Table } from "reactstrap";
import { ProductData } from "../constants";
import CouponModal from "./CouponModal";

const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);

  const applyCoupon = (discount) => {
    const discountedAmount = (discount / 100) * totalAmount;
    setDiscountAmount(discountedAmount.toFixed(2));
  };

  const handleProductSelection = (e, product) => {
    let newProducts = products.length ? [...products] : [];
    let index = -1;
    let amount = 0;
    index = newProducts?.findIndex((e) => e.productId === product.productId);
    if (index > -1) {
      newProducts.splice(index, 1);
    } else {
      newProducts.push(product);
    }

    newProducts.map((result, key) => {
      amount = amount + result.price;
      return amount;
    });
    setTotalAmount(amount.toFixed(2));
    setProduct(newProducts);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product ID </th>
            <th>Product Name</th>
            <th>Price ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ProductData?.length &&
            ProductData.map((product, key) => {
              return (
                <tr keys={`product_${key}`}>
                  <td>{product.productId}</td>
                  <td>{product.productName}</td>
                  <td>${product.price}</td>
                  <th>
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={product.productId}
                        id={product.productId}
                        checked={
                          products?.length &&
                          products?.findIndex(
                            (e) => e.productId === product.productId
                          ) > -1
                        }
                        onChange={(e) => handleProductSelection(e, product)}
                      />
                    </div>
                  </th>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <CouponModal setCouponCode={applyCoupon} totalAmount={totalAmount} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <div>Total Bill - ${totalAmount}</div>
        <div>Total Discount - ${discountAmount}</div>
        <div>Total - ${totalAmount - discountAmount}</div>
      </div>
    </>
  );
};

export default ProductList;
