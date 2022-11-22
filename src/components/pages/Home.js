import React from 'react';
import Myself from './Myself.png';

export default function Home() {
  return (
    <div class="aboutMe">
      <h1>About Me</h1>
      <p>
        I am a 24 year old male by the name of Justin Ruiz. I'm located in Bergen County, New Jersey and to be more specific, Garfield, NJ. 
        I grew up playing sports such as baseball, swimming, and basketball. All in which helped shaped me to become a leader by going into "battle" 
        with my teammates and having their back through it all. Since then, in whatever I do I always look to be a leader or a resource to my peers 
        whenever they need a hand. I've never been known as the type to turn my back on anyone. It's also important to me to be coach-able and be able to listen
        and learn from people simply because I know there's always room for improvement! Some of my passions are, but not limited to:
      </p>
      <ul>
          <li>
              Working out
          </li>
          <li>
              Watching/Playing sports
          </li>
          <li>
              Learning new things
          </li>
          <li>
              Spending time with my loved ones
          </li>
      </ul>
      <p>
          Growing up a hispanic male has taught me a lot about myself, and others. It's important to me to embrace all the different cultures 
          presented to me and learn how different these cultures are. I love getting to know people and learning about who they are and their stories.
          With that being said, I'd love to get to know you a little more so please be sure to contact me by visiting the contact page above! I will leave you with a 
          nice image of the person you are reading about, me!
      </p>
      <img src={Myself} alt="Myself" class ="myself"></img>
    </div>
  );
}
