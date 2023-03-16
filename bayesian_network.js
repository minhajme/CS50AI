// Bayesian network, which is dependency network of random variables

const elements = [];
const ands = [];
const ors = [];
const conditions = [];


function ProbabilityElement(name) {

}

function ProbabilityScenerio(scene_description) {
    let probability_value = null;
    
    get val() {
        return probability_value;
    }
    set val(v) {
        probability_value = v;
        return this;
    }
}


const newElement = (name) => {
    const worldElement = new ProbabilityElement(name);
    elements.append(worldElement);
    return worldElement;
}


function probability() {
    if (!arguments.length) throw new Error('argument required');
    if (arguments.length === 1 && typeof arguments[0]==='object') {
        const scene = new ProbabilityScenerio(arguments[0]);
        return scene;
    }
}

export { newElement, probability };
