import React from "react";

import "./style.scss";

const Footer = () => {
  const addresses = [
    {
      town: "Amsterdam",
      address: "IJpromenade 1, 1031 KT Amsterdam, Netherlands",
      phone: "+312 058 91400",
      email: "amsterdam@webunlocked.co",
    },
    {
      town: "London",
      address: "Westminster, London SW1A 0AA, United Kingdom",
      phone: "+442 072 468350",
      email: "london@webunlocked.co",
    },
    {
      town: "Zürich",
      address: "Museumstrasse 2, 8001 Zürich, Switzerland",
      phone: "+414 421 86511",
      email: "zurich@webunlocked.co",
    },
  ];

  return (
    <div className="footer" data-scroll data-scroll-speed={-7}>
      <div className="contact-addresses">
        {addresses.map((info) => (
          <div key={info.town}>
            <h1>{info.town}</h1>
            <div>
              {info.address.split(",").map((element) => (
                <p key={element}>{element}</p>
              ))}
            </div>
            <p>{info.phone}</p>
            <p>{info.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
