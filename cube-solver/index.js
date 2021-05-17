import kociemba, { phaseOne, phaseTwo } from './kociemba';
import get3x3Scramble from './3x3.js';


export default {
  solve: (scramble, solver = 'kociemba') => {
    const solvers = {
      kociemba,
    };

    if (solvers[solver]) {
      return solvers[solver](scramble);
    }

    throw new Error('Specified solver does not exist.');
  },

  scramble: (scrambler = '3x3') => {
    const scramblers = {
      '3x3': get3x3Scramble,
    };

    if (scramblers[scrambler]) {
      return scramblers[scrambler]();
    }

    throw new Error('Specified scrambler does not exist.');
  },

  initialize: (solver) => {

    if (solver === 'kociemba') {
      phaseOne.initialize();
      phaseTwo.initialize();
    } else {
      throw new Error('Specified solver does not exist.');
    }
  },
};
