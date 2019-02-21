import React,{PropTypes} from 'react';
import ProblemForm from './ProblemForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import * as problemActions from '../../actions/problemActions';

class ProblemPage extends React.Component{
    constructor(props,context){
        super(props,context);

        this.state={
            problem: Object.assign({},this.props.problem),
            saving:false,
            errors:{}
        };

        this.updateProblemState = this.updateProblemState.bind(this);
        this.saveProblem = this.saveProblem.bind(this);
    }
    
    componentWillReceiveProps(nextProps)
    {
        if(this.props.problem.id != nextProps.problem.id)
        {
            this.setState({problem:Object.assign({},nextProps.problem)});
        }
    }
    updateProblemState(event){
        const field = event.target.name;
        let problem = Object.assign({},this.state.problem);
        problem[field]=event.target.value;
        return this.setState({problem:problem});
    }

    saveProblem(event){
        event.preventDefault();
        this.setState({saving:true});
        this.props.actions.saveProblem(this.state.problem)
        .then(()=> this.redirect())
        .catch(error=>{
            toastr.error(error);
            this.setState({saving:false});
        });
    }
    redirect(){
        this.setState({saving:false});
        toastr.success('Problem added');
        this.context.router.push('/problems');
    }

    render(){
        return(
            <ProblemForm problem={this.state.problem}
                            errors={this.state.errors}
                            allCategories={this.props.categories}
                            onChange={this.updateProblemState}
                            onSave={this.saveProblem}
                            saving={this.state.saving}/>    
        );
    }
}

ProblemPage.propTypes={
    problem: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function getProblemById(problems, problemId){
    const problem = problems.filter(problem=>problem.id == problemId);
    if(problem.length)
        return problem[0];
    else
        return null;    
}
ProblemPage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps)
{
    const problemId = ownProps.params.id; //gets the id if the problems page is visited for a particular problem via /problem/1
    let problem = {id:'',shortdescription:'',description:'',solution:'',category:'',solved:''};
    if(problemId && state.problems.length>0 )
    {
        problem = getProblemById(state.problems,problemId);
    }
    return{
        problem:problem,
        categories:state.categories.map(category=>{return {value:category, text:category};})
    };
}

function mapDispatchToProps(dispatch)
{
    return{
        actions: bindActionCreators(problemActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProblemPage);