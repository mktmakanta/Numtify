import React from "react";
import { useParams } from "react-router-dom";
import { orders } from "../data/orders";

export default function OrderDetails() {
  const { details } = useParams();
  const okDetails = Number(details);
  const thisOrder = orders.find((d) => d.id === okDetails);

  return (
    <div className="bg-white space-y-3 p-7 mt-5 font-raleway font-semibold pb-28 rounded-lg">
      <div>Service: {thisOrder.service}</div>
      <div>Number: {thisOrder.number}</div>
      <div>Status: Code Recieved</div>
      <div>
        Code: Your {thisOrder.service} verification code is: {thisOrder.code}
      </div>
    </div>
  );
}
