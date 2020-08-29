import { getDinos } from "./data/dinoData.js";
import { displayDinos } from '../components/displayDinos.js';
import { addDinoButtonClick } from '../components/addDino.js'

const init = () => {
  displayDinos(getDinos());
  addDinoButtonClick();
};
init();
