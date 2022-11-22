import React from 'react';
import PwGenerator from './PasswordGenerator.png';

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <section class="card col-3 m-3">
        <section class="card-header">
            <h2>Password Generator</h2>
        </section>
        <section class="card-body bg-secondary">
            <img src={PwGenerator}></img>
        </section>
    </section>
    </div>
  );
}