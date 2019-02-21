import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import LargeText from '../common/LargeText';

const ProblemForm=({problem, allCategories, onSave, onChange, saving, errors}) => {
    debugger;
    return(
        <form>
            <h1>Manage Problem</h1>
            <TextInput 
                name="shortdescription"
                label="Short Description"
                value={problem.shortdescription}
                onChange={onChange}
                error={errors.shortdescription}/>
            <SelectInput 
                name="category"
                label="Category"
                value={problem.category}
                defaultOption="Select a category"
                options={allCategories}
                onChange={onChange}
                error={errors.category}/>    
            <TextInput 
                name="description"
                label="Description"
                value={problem.description}
                onChange={onChange}
                error={errors.description}/>
            <LargeText name="solution"
                       label="Solution"
                       value={problem.solution}
                       onChange={onChange}
                       error={errors.solution}/> 
            <input
                type="submit"
                disabled={saving}
                value={saving?'Saving..':'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

ProblemForm.propTypes={
    problem: React.PropTypes.object.isRequired,
    allCategories: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default ProblemForm;