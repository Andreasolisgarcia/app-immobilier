import React from "react";
import clients from "../assets/clients";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div>
      <h1>Works</h1>
      <p>
        Au fil des années, nous avons pu accompagner les meilleurs. Découvrez
        pas à pas comment nous avons été présents pour lancer vos marques
        préférées.
      </p>
      {clients.map((client) => (
        <li key={client.name}>
          <Link to={`/works/${client.name}`}>{client.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Works;
