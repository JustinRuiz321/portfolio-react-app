import React from 'react';
import './App.css';

export default function Work() {
  return (
    <div className='aboutMe'>
      <h1>Previous Work Experience</h1>
      <div className='border'>
        <h1>
        IT Technician — EquityZen, New York NY
        </h1>
        <h4>March 2022 - Present</h4>
        <p>This is the first IT position created for EquityZen. My job includes handling tickets via JIRA, on-boards/off-boards, and answering questions when people need support in a timely and respectful manner. That being said, there are some major accomplishments to go along with it including:</p>
        <ul>
          <li>Off-Board the previous outsourced IT company and implementing a new MDM across the entire company.</li>
          <li>Creating a Knowledge Base for troubleshooting more common to some complex issues to speed up turn around time on JIRA tickets</li>
          <li>Leading the IT portions of all company meetings</li>
          <li>More recently, handling a major downsize to the company.</li>
        </ul>
      </div>
      <div className='border'>
        <h1>Genius — Apple Store, Paramus NJ</h1>
        <h4>September 2018 - March 2022</h4>
        <p>I was a technician who was certified to troubleshoot or repair all Apple devices. Along with being a technician, this is a Pro/Leadership level role which includes being a main resource for support when peers had troubles. Checking up on the team to make sure everyone was alright and aligned with the company values or goals was a standard I set on myself being in this position as well.</p>
      </div>
      <div className='border'>
        <h1>Operations Manager — 24 Hour Fitness, Hasbrouck Heights NJ</h1>
        <h4>February 2017 - September 2018</h4>
        <p>An operations manager included scheduling, ordering equipment needed for the gym, and processing the revenue collected properly. This is primarily a customer service role as it was important to make sure each guest were treated respectfully and with care. All while being a leader to the team around me.</p>
      </div>

    </div>
  );
}
