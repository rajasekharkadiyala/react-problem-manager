import * as types from './actionTypes';
import problemApi from '../api/mockProblemApi';
//import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';

export function loadProblemsSuccess(problems)
{
    return {type:types.LOAD_PROBLEMS_SUCCESS,problems};
}

export function updateProblemSuccess(problem)
{
    return {type:types.UPDATE_PROBLEM_SUCCESS,problem};
}

export function createProblemSuccess(problem)
{
    return {type:types.CREATE_PROBLEM_SUCCESS,problem};
}

export function loadProblems(){
    debugger;
    return function(dispatch){
        //dispatch(beginAjaxCall());
        return problemApi.getAllProblems().then(problems=>{
            dispatch(loadProblemsSuccess(problems));
        }).catch(error=>{
            //dispatch(ajaxCallError());
            throw error;
        });
    };
}

export function saveProblem(problem){
    return function(dispatch,getState){
        //dispatch(beginAjaxCall());
        return problemApi.saveProblem(problem).then(savedProblem=>{
            problem.id? dispatch(updateProblemSuccess(savedProblem)): dispatch(createProblemSuccess(savedProblem));
        }).catch(error=>{
            //dispatch(ajaxCallError());
            throw error;
        });
    };
}