import React, { useState, useEffect } from "react";
import { services } from "../data/services";

export default function NewOrdersComp() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [currentPrice, setCurrentPrice] = useState("");
  const [currentRemaining, setCurrentRemaining] = useState("");

  useEffect(() => {
    if (selectedService) {
      const service = services.find(
        (service) => service.serviceName === selectedService
      );
      const firstCountry = service.countries[0];
      setSelectedCountry(firstCountry.name);
      setCurrentPrice(firstCountry.price);
      setCurrentRemaining(firstCountry.remaining);
    }
  }, [selectedService]);

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
    setSelectedCountry("");
    setCurrentPrice("");
    setCurrentRemaining("");
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);

    const service = services.find(
      (service) => service.serviceName === selectedService
    );
    const countryData = service.countries.find(
      (country) => country.name === selectedCountry
    );

    setCurrentPrice(countryData.price);
    setCurrentRemaining(countryData.remaining);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Service: ${selectedService}, Country: ${selectedCountry}, Price: ${currentPrice}, Total order: "1"`
    );
  };

  return (
    <div className=" p-6 mt-5 bg-gray-100 rounded-md shadow-md font-raleway">
      <div className="text-red-600 text-sm font-light mt-3 mb-5">
        Search for a service in the search box
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-7">
          <label className="block font-bold my-2">Service</label>
          <select
            value={selectedService}
            onChange={handleServiceChange}
            className="w-full px-3 py-3.5 focus:outline outline-blue-600  rounded-md"
          >
            <option
              className="text-sm font-thin"
              value=""
              disabled
              selected
              hidden
            >
              Tap to search fro a service
            </option>
            {services.map((service, index) => (
              <option key={index} value={service.serviceName}>
                {service.serviceName}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-7">
          <label className="block font-bold my-2">Country</label>
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="w-full px-3 py-3.5 focus:outline  outline-blue-600 rounded-md"
          >
            <option className="text-sm font-thin" value=" " selected hidden>
              USA
            </option>
            {selectedService &&
              services
                .find((service) => service.serviceName === selectedService)
                .countries.map((country, index) => (
                  <option key={index} value={country.name}>
                    {country.name}
                  </option>
                ))}
          </select>
        </div>

        <div className="mb-7">
          <label className="block font-bold my-2">Charge</label>
          <input
            type="text"
            value={currentPrice}
            disabled
            className="w-full px-3 py-3.5 border  rounded-md bg-gray-200"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold my-2">Available Numbers</label>
          <input
            type="text"
            value={currentRemaining}
            disabled
            className="w-full px-3 py-3.5 border  rounded-md bg-gray-200"
          />
        </div>

        <button
          type="submit"
          disabled={!selectedService || !selectedCountry}
          className="mb-5 bg-blue-500 text-white py-2 px-10 rounded-sm hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
