import React from 'react';
import PwGenerator from './PasswordGenerator.png';
import WorkDay from './WorkSchedule.png';
import Jate from './Jate.png';
import NotesApp from './NotesApp.png';
import Weather from './WeatherDashboard.png';
import PopQuiz from './PopQuiz.png';

export default function Projects() {
  return (
    <div className="aboutMe">
      <h1>My Projects</h1>
      <h5>Please feel free to click the images to access the deployed projects</h5>
      <div className='row'>
        <section className="card col-3 m-3 column">
        <section className="card-header">
            <h2>Password Generator</h2>
        </section>
        <section className="card-body bg-secondary">
            <a href="https://justinruiz321.github.io/Password-Generator/" target="_blank"><img src={PwGenerator}></img></a>
        </section>
            <h5>This project was mainly using JavaScript to create a random password for users</h5>
            <h5><a href="https://github.com/JustinRuiz321/Password-Generator" target="_blank">Github Repository</a></h5>
    </section>
    <section className="card col-3 m-3 column">
        <section className="card-header">
            <h2>Work Day Scheduler</h2>
        </section>
        <section className="card-body bg-secondary">
            <a href="https://justinruiz321.github.io/Work-Day-Scheduler/" target="_blank"><img src={WorkDay}></img></a>
        </section>
            <h5>This project uses Javascript to save notes to your local storage to plan your work day</h5>
            <h5><a href="https://github.com/JustinRuiz321/Work-Day-Scheduler" target="_blank">Github Repository</a></h5>
    </section>
    <section className="card col-3 m-3 column">
        <section className="card-header">
            <h2>J.A.T.E.</h2>
        </section>
        <section className="card-body bg-secondary">
            <a href="https://pwa-jate-js-text-editor.herokuapp.com/" target="_blank"><img src={Jate}></img></a>
        </section>
            <h5>This is a JavaScript text editor that you can install to your local machine! This is implimenting PWA.</h5>
            <h5><a href="https://github.com/JustinRuiz321/PWA-Text-Editor" target="_blank">Github Repository</a></h5>
    </section>
    <section className="card col-3 m-3 column">
        <section className="card-header">
            <h2>Notes App</h2>
        </section>
        <section className="card-body bg-secondary">
            <a href="https://module11-notes-app.herokuapp.com/" target="_blank"><img src={NotesApp}></img></a>
        </section>
            <h5>This is introducing express and this is a simple notes application that saves the notes to a database and can also delete the note from the database</h5>
            <h5><a href="https://github.com/JustinRuiz321/11-NotesApp" target="_blank">Github Repository</a></h5>
    </section>
    <section className="card col-3 m-3 column">
        <section className="card-header">
            <h2>Weather Dashboard</h2>
        </section>
        <section className="card-body bg-secondary">
            <a href="https://justinruiz321.github.io/WeatherDashboard/" target="_blank"><img src={Weather}></img></a>
        </section>
            <h5>A small application to gather information from an API to give current forecast in a searched city, as well as the next 5 days</h5>
            <h5><a href="https://github.com/JustinRuiz321/WeatherDashboard" target="_blank">Github Repository</a></h5>
    </section>
    <section className="card col-3 m-3 column">
        <section className="card-header">
            <h2>Pop Quiz</h2>
        </section>
        <section className="card-body bg-secondary">
            <a href="https://justinruiz321.github.io/Pop-Quiz/" target="_blank"><img src={PopQuiz}></img></a>
        </section>
            <h5>A pop quiz created with JavaScript to show different pages after answers have been selected. Also tallying a final score in which you can submit your username and have the scores saved locally!</h5>
            <h5><a href="https://github.com/JustinRuiz321/Pop-Quiz" target="_blank">Github Repository</a></h5>
    </section>
    </div>
    </div>
  );
}