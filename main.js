import { getDinos } from './data/dinoData.js';
import { healthChecker } from '../components/displayDinos.js';


const init = () => {
  healthChecker(getDinos());
};
init();
