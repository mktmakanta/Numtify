import React from "react";
import NewOrdersComp from "../components/NewOrdersComp";

export default function NewOrders() {
  return (
    <div className="minh">
      <div className="font-raleway max-w-4xl ">
        <div className=" rounded-md  w-full  relative">
          <video
            className="rounded-md h-full w-full z-0 object-cover"
            src="verification.mp4"
            controls
          ></video>
        </div>
        <NewOrdersComp />
        <div className=" bg-white p-5 rounded-lg mt-7 space-y-2 shadow-sm shadow-gray-300 ">
          <h1 className="font-semibold text-xl underline">Disclaimer</h1>
          <ul className="space-y-3 font-medium pb-16">
            <li>
              1. If you do not receive SMS within 25 minutes you'll be refunded.
            </li>

            <li>
              2. You can use phone number to verify account only bought service,
              different SMS will rejected.
            </li>
            <li>
              3. Forbidden to use the service for any illegal purposes as well
              as not to take actions that harm the service and (or) third
              parties.
            </li>
            <li>
              4. All phone numbers are temporary (not permanent), when sms has
              been received with phone number it'll become invalid.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
