import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>SPA-Delay is a Single Page Application (SPA) and a Signal-Processing Application (SPA). It uses React, Axios, PG, and MUI alongside the WebAUdio API and the Filter Delay from RNBO by Cycling '74 for signal processing.</p>
      </div>
    </div>
  );
}

export default AboutPage;
