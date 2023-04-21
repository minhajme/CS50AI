import { ProbabilityScenerio, and, or, cond }
from "bayesian_network.js";

const newvar = ProbabilityScenerio;
const scenerio = ProbabilityScenerio;

const cloud = newvar('cloud');
const rain = newvar('rain');

CREATE_ELEMENT_IF_NOT_EXISTS = true;
scenerio('hail').probability = undefined;

scenerio([rain, and, cloud], or, hail).probability = 0.2;
scenerio([[rain, and, cloud], or, hail]).probability = 0.2;
scenerio([ [ [rain], and, [cloud] ], or, [hail] ]).probability = 0.2;
scenerio([ "__or__", "hail", ["__and__", "cloud", "rain"] ]).probability = 0.2;
scenerio(rain).probability = 0.2;
scenerio(cloud).probability = 0.2;

console.log(scenerio(hail).probability);
console.log(scenerio(cloud, cond, rain).probability);
