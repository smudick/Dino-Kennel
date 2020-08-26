import { getDinos } from './data/dinoData.js';
import { displayDinos } from '../components/displayDinos.js';


const init = () => {
    displayDinos(getDinos());
}
init();
