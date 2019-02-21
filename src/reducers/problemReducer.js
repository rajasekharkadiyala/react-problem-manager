import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state=initialState.problems, action){
    debugger;
    switch(action.type){
        case types.LOAD_PROBLEMS_SUCCESS:
            return action.problems;
        case types.CREATE_PROBLEM_SUCCESS:
            return [...state,Object.assign({},action.problem)];
        case types.UPDATE_PROBLEM_SUCCESS:
            return [...state.filter(problem=>problem.id!==action.problem.id),Object.assign({},action.problem)];
        default:
            return state;
    }
}