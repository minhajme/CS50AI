var FLAGS = {
    CREATE_ELEMENT_IF_NOT_EXISTS: false;
};

const elements = [];
const scenerios = {};

function ProbabilityElement(name) {
    this.toString() {
        return name;
    };

    validate_name();
    if (!elements.contains(name)) elements.append(name);
    return this;
}

function ProbabilityScenerio() {
    let probability_value = null;

    get this.probability() {
        return probability_value;
    }
    set this.probability(v) {
        probability_value = v;
        scenerios[scenerio_description] = v;
        return this;
    }

    if (!arguments.length) throw new Error('argument required');
    if (arguments.length === 1 && typeof arguments[0]==='object') {
        const scene_description = arguments[0];
        return sceneObject;
    }
    if (arguments.length > 1) {
       throw new Error("not yet implemented");
    }


    validate_scene_description();
}


export {
    ProbabilityElement,
    ProbabilityScenerio,
    and: '__and__'.
    or: '__or__',
    cond: '__cond__'
};

