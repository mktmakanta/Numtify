import React from "react";

export default function HeroServices() {
  return (
    <div className="services p-5 lg:py-10 font-raleway lg:grid grid-cols-3 gap-4">
      <div className="service bg-blue-50/60  p-5 rounded-lg pb-16 my-5">
        <div className="my-3">
          <img className="w-12" src="/icons/quality.svg" alt="" />
        </div>
        <h1 className="font-bold text-lg my-3">High Quality Service</h1>
        <p className="text-sm">
          We provide the highest quality verifications for your SMS verification
          needs. We make sure to only provide non-VoIP phone numbers in order to
          work with any service.
        </p>
      </div>
      <div className="service bg-blue-50/60  p-5 rounded-lg pb-16 my-5">
        <div className="my-3">
          <img className="w-12" src="/icons/web.svg" alt="" />
        </div>
        <h1 className="font-bold text-lg my-3">Wide Range Of Support</h1>
        <p className="text-sm">
          We currently support a large variety of services including, but not
          limited to Steam, Tinder, Google, Uber, Discord, and even Twitter
        </p>
      </div>
      <div className="service bg-blue-50/60  p-5 rounded-lg pb-16 my-5">
        <div className="my-3">
          <img className="w-12" src="/icons/sms.svg" alt="" />
        </div>
        <h1 className="font-bold text-lg my-3">Instant Verification</h1>
        <p className="text-sm">
          With our extremely fast servers, your message will be relayed to you
          as soon as possible. This means that it takes less than 10 seconds to
          receive your text messages using our phone number.
        </p>
      </div>
    </div>
  );
}
