const expect_probability_element_name = (name) => {
    const reserved_names = [ 'and', 'or', 'cond', 'n', 'u', '|' ];
    expect_string(name);
    expect_not_in_array(reserved_names, name);
};

const expect_scene_description = (scenerio_description) => {
    
};

const scenerio_standard_representation = (scenerio_description) => {
    expect_scene_description(scenerio_description);

};


export {
    validate_probability_element_name, 
    scenerio_standard_representation,
    validate_scene_description
};
