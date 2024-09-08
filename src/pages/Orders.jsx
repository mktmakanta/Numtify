import React from "react";
import { orders } from "../data/orders";
import { NavLink } from "react-router-dom";

export default function Orders() {
  return (
    <section className="font-raleway mt-7">
      <div class="overflow-x-auto">
        <table class="min-w-full table-auto bg-white shadow-md rounded-lg">
          <thead class="bg-blue-500 text-white rounded-lg">
            <tr>
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">Service</th>
              <th class="px-4 py-2">Number</th>
              <th class=" ,rounded-lg px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                class=" text-center divide-y odd:bg-white even:bg-slate-50 "
              >
                <td class="pl-4 py-2">{order.id}</td>
                <td class=" p-2">{order.service}</td>
                <td class=" p-2">{order.number}</td>
                <td class="pr-3 py-2">
                  <NavLink
                    to={`/user/orders/${order.id}`}
                    className=" inline-block rounded-md px-5 py-2 bg-blue-500 text-white"
                  >
                    View
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
