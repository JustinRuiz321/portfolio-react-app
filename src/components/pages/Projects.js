import React from 'react';
import PwGenerator from './PasswordGenerator.png';

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <h5>Please feel free to click the images to access the deployed projects</h5>
      <section className="card col-3 m-3">
        <section className="card-header">
            <h2>Password Generator</h2>
        </section>
        <section className="card-body bg-secondary">
            <img src={PwGenerator}></img>
        </section>
            <h5>This project was mainly using JavaScript to create a random password for users</h5>
    </section>
    </div>
  );
}