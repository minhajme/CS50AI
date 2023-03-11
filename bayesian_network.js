// Bayesian network, which is dependency network of random variables

const var_list = [];

function Variable(name) {
    this.and = function() {};
    this.or = function() {};
    this.cond = function() {};
}

function Probability(e) {
    
}

/**
 * get/set probability
 * @param {Variable|string} a
 * @param {number} v
 */
const set_probability = a, v => {};
const get_probability = a, v => {};
const probability = a => {};

const new_Variable = (name) => {
    const worldVar = new Variable(name);
    world_vars.append(worldVar);
    return worldVar;
}

export { new_Variable, probability };
