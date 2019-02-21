import React,{PropTypes} from 'react';
import ProblemItem from './ProblemItem';
import { connect } from 'react-redux';

class AllProblems extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {allProblems}=this.props;
        return(
            <div class="container-fluid">
                Total problems solved: {allProblems.length}
                {allProblems.map(prob=>
                    <ProblemItem key={prob.id} problem={prob}/>
                        )};
            </div>
        );
    }
}

AllProblems.propTypes={
    allProblems: PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps){
    return {allProblems: state.problems};
}

export default connect(mapStateToProps)(AllProblems);