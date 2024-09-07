import React from "react";
import { transactions } from "../data/Fundings";

export default function AddFunds() {
  return (
    <section className="font-raleway">
      <div className="p-5 bg-white max-w-3xl rounded-lg space-y-2 ">
        <h1 className="font-semibold text-xl">Amount</h1>
        <input
          className="w-full ring-1 rounded-sm h-12 p-3 focus:outline outline-blue-700 ring-neutral-200"
          type="text"
          name=""
          id=""
        />
        <p
          className="mb-4 
        block text-red-600 font-light"
        >
          Mininum amount to fund is N1000
        </p>
        <button className="py-3 px-12 font-medium text-lg shadow-md  bg-blue-600 text-white">
          Pay
        </button>
      </div>

      <div className="bg-white mt-5 rounded-lg ">
        <div className="flex justify-between py-2 px-28 rounded-t-lg mx-auto bg-blue-500 text-white font-semibold ">
          <div>ID</div>
          <div>Date</div>
          <div>Amount</div>
        </div>

        <div className="divide-y pb-10  ">
          {transactions.map((trans, index) => (
            <ul
              key={index}
              className="flex justify-between jus px-24 py-3 space-y-4  items-center "
            >
              <li>{trans.id}</li>
              <li className="text-left">{trans.dateTime}</li>
              <li className=" justify-self-start">
                NGN {trans.transactionAmount}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
