import React from 'react';

import AccordionApp from './Accordion/App';
import AccordionAppSolution from './Accordion/Solution/App';

import FlightBookerApp from './FlightBooker/FlightBookerApp';
import FlightBookerSolutionApp from './FlightBooker/Solution/FlightBookerSolutionApp';

function Challenge() {
  return (
    <React.Fragment>
      <FlightBookerApp />
      <FlightBookerSolutionApp />
    </React.Fragment>
  );
}

export default Challenge;
