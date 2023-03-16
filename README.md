## A bayesian probability network implementation in JavaScript/ES6

### Key Concepts

core concepts are simple. Think of different elements or variables constructing a world.
A probabilistic relation description among the elements is a scene.
Think of a world of only rain, cloud and hail to be the elements or variables of interest.
So in this world `rain` `cloud` and `hail` are the elements or variables.
Probabilistic relation among the elements can be `n` `u` `|` i.e., `and` `or` `cond`.
So a scene statement/expression can be [[cloud, and, rain], or, hail] which describes 
the probability of happening cloud and rain together, or only hail.

#### Usage Examples:
```es6
import { newElement as newvar, probability as probab, and, or, cond } from "bayesian_network.js";

const cloud = newvar('cloud');
const rain = newvar('rain');
const hail = newvar('hail');

probab([rain, and, cloud], or, hail).val = 0.2;
probab([[rain, and, cloud], or, hail]).val = 0.2;

console.log(probab(cloud).val);
console.log(probab(cloud, cond, rain).val);

```

