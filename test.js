import { new_Variable as newvar, probability as probab } from "bayesian_network.js";

const cloud = newvar('cloud');
const rain = newvar('rain');

probab(rain) = 0.2; // probability('rain')
probab(cloud.and(rain)) = 0.2; // probability('cloud n rain')
probab(rain.and(cloud)) = 0.2; // probability('rain n cloud')
probab(rain.or(cloud)) = 0.05; // probability('rain u cloud')
probab(rain.cond(cloud)) = 0.2; // probability('rain | cloud')

console.log(probab(cloud));
console.log(probab(cloud.cond(rain)));
