import React,{PropTypes} from 'react';
import Collapsible from 'react-collapsible';
import {Link} from 'react-router';

const ProblemItemRow=({problem})=>{
    return(
        <Collapsible trigger={problem.shortdescription}>
                <div class="row">
                    <div class="col-sm-4">
                        <p><u>Category:</u> {problem.category}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <p><u>Description: </u></p>
                        <p class="tab">{problem.description}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <p><u>Solution: </u></p>
                        {problem.solution}
                    </div>
                </div>
                <Link to={'/problem/'+problem.id}>Edit Solution</Link>
        </Collapsible>
    );
};



ProblemItemRow.propTypes={
    problem:PropTypes.object.isRequired
};

export default ProblemItemRow;