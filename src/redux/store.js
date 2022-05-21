import { combineReducers, createStore } from 'redux';
import { calculatorReducer } from './calculatorReducer';

const rootReducer = combineReducers({
    calculator: calculatorReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const getExpression = (state) => {
    return state.calculator.expression
}
 
export const getTotal = (state) => {
    return state.calculator.total
}
