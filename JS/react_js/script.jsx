import otmazka from 'otmazka';

console.log(otmazka('instruction'));
console.log(otmazka('assessment'));
console.log(otmazka('tascs'));

import { checkLS, showMessage } from './cookies';
if (!checkLS()) console.log(showMessage('problem'));

