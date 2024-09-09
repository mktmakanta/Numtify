import React from "react";

const services = [
  {
    title: "Register",
    description: "Start by creating an account if you are a new customer",
    image: "register",
    color: "red",
  },
  {
    title: "Login",
    description:
      "After registration, you can login to your account to start using.",
    image: "login",
    color: "blue",
  },
  {
    title: "Deposit",
    description: "Make a deposit using our secure payment method",
    image: "deposit",
    color: "teal",
  },
  {
    title: "Order",
    description: "Select your preferred country & service and place an order.",
    image: "cart",
    color: "black",
  },
  {
    title: "Receive SMS",
    description: "You will receive your verification SMS in a bit.",
    image: "recieve-sms",
    color: "purple",
  },
  {
    title: "Done!",
    description: "Input the verification code to verify the number",
    image: "clipboard",
    color: "orange",
  },
];

export default function GetStarted() {
  return (
    <section className="bg-blue-200 font-raleway p-4 pb-12 lg:pb-60">
      <div className="wrapper text-center ">
        <h1 className="font-bold text-3xl mt-10">Get started</h1>
        <p className="my-5">
          Here are the simple steps involved in using our fast SMS Verification
          service!
        </p>

        <div className="container px-6 lg:flex">
          {services.map((service, index) => (
            <div
              key={index}
              className=" flex gap-4 text-left items-center my-3"
            >
              <div
                style={{ background: `${service.color}` }}
                className="min-w-16 max-w-16 lg:gap-4 h-16 flex justify-center items-center rounded-full col-span-1"
              >
                {" "}
                <img
                  className="w-8 lg:w-6"
                  src={`src/assets/icons/${service.image}.svg`}
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-xl font-semibold my-4">{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
