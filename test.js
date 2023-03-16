import { newElement as newvar, probability as probab, and, or, cond } from "bayesian_network.js";

const cloud = newvar('cloud');
const rain = newvar('rain');
const hail = newvar('hail');

//probab(rain).val = 0.2;
//probab(cloud, and, rain).val = 0.2;
//probab(rain, or, cloud).val = 0.05;
//probab(rain, cond, cloud).val = 0.2;
//probab(and(rain, cloud)).val = 0.2;
//probab(and(rain, cloud), or, hail).val = 0.2;
//probab(or(and(rain, cloud), hail)).val = 0.2;
probab([rain, and, cloud], or, hail).val = 0.2;
probab([[rain, and, cloud], or, hail]).val = 0.2;

console.log(probab(cloud).val);
console.log(probab(cloud, cond, rain).val);
