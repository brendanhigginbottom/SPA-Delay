import React from 'react';

import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>
          SPA-Delay is a Single Page Application (SPA) and a Signal-Processing Application (SPA). 
          It uses React, Redux and Sagas, Axios, PG, and MUI alongside the&nbsp;
           <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API'>WebAudio API</a> 
           &nbsp;and the Filter Delay from&nbsp;
           <a target='_blank' href='https://rnbo.cycling74.com/'>RNBO</a> 
           &nbsp;by Cycling '74 for signal processing.
        </p> <br />
        <p>All sound files are my own except for "Ham Radio Operators" which features two unknown
          HAM radio operators recorded using the&nbsp; 
          <a target='_blank' href='http://websdr.ewi.utwente.nl:8901/'> Wide-band WebSDR</a>
          &nbsp;by the University of Twente.
        </p> <br />
        <p>SPA-Delay was created as my Solo Project for Prime Digital Academy. 
          Thank you to my cohort, the instructors at Prime, my family, and my partner. 
          None of this would have happened without you.
        </p>

      </div>
    </div>
  );
}

export default AboutPage;
