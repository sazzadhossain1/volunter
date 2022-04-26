import React, { useEffect, useState } from "react";
import AllService from "../AllService/AllService";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="mt-5">I Grow By Helping People In Need</h1>
     <form className="search-field mt-5 shadow-lg ">
     <input className="input-field " type="text"placeholder="Search" />
      <button className="input-button ">Search</button>
     </form>
      <div className="service-container">
        {services.map((service) => (
          <AllService key={service.id} service={service}></AllService>
        ))}
      </div>
    </div>
  );
};

export default Home;
