// == Import npm
import React from 'react';
import Typing, { Backspace, Delay, Speed } from 'react-typing-animation';

// == Component
const AnimatedTyping = () => (
  <Typing loop={true} className="cursorStyle">
    <div>
      <Speed ms={40} />I am<b> Web Developper</b>
      <Delay ms={1000} />
      <Speed ms={20} />
      <Backspace count={20} />
      <Speed ms={40} />
      I've been exploring
      <Delay ms={750} />
      <Speed ms={80} />
      <b> Databases</b>
      <Delay ms={1000} />
      <Speed ms={20} />
      <Backspace count={10} />
      <Speed ms={80} />
      <b> Photoshop</b>
      <Delay ms={1000} />
      <Speed ms={20} />
      <Backspace count={10} />
      <Speed ms={80} />
      <b> Wireframes</b>
      <Delay ms={1000} />
      <Speed ms={20} />
      <Backspace count={11} />
      <Speed ms={80} />
      <b> Web Design</b>
      <Delay ms={1000} />
      <Speed ms={20} />
      <Backspace count={11} />
      <Speed ms={80} />
      <b> Backend</b>
      <Delay ms={1000} />
      <Speed ms={20} />
      <Backspace count={31} />
    </div>
  </Typing>
);

// == Export default
export default AnimatedTyping;
