import {combineReducers} from 'redux';
import problems from './problemReducer';
import categories from './categoriesReducer';

export default combineReducers({
    problems,
    categories
});