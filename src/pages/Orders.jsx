import React from "react";
import { orders } from "../data/orders";
import { NavLink } from "react-router-dom";

export default function Orders() {
  return (
    <section className="font-raleway mt-7">
      <div>
        <ul className="bg-blue-500 text-white font-bold flex justify-evenly rounded-t-lg py-2">
          <li>ID</li>
          <li>Service</li>
          <li>Number</li>
        </ul>
        <div className="bg-white divide-neutral-200 divide-y font-normal pb-5">
          {orders.map((order, index) => (
            <ul
              key={index}
              className="grid grid-cols-3 py-3 justify-center px-3    "
            >
              <li className="justify-self-center">{order.id} </li>
              <li className="justify-self-center text-wrap">{order.service}</li>
              <li className="justify-self-end space-x-20">
                <span>{order.number} </span>
                <NavLink
                  to={`/user/orders/${order.id}`}
                  className=" h-5 py-2 px-4 rounded-md font-semibold bg-blue-500 text-white"
                >
                  View
                </NavLink>{" "}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
