import calculate from '../utils/calculate';
import * as types from './types.js';

const initialState = {
    expression: '',
    total: 0
};

function setExpression({ expression, total}, action) {

    if (
      /[\d]*[-+%*/.]$/.exec(expression) &&
      /[-+%*/.]/.exec(action.payload)
    ) {
      console.log('b', expression);
      expression = expression.slice(0, expression.length - 1)
      console.log('a', expression);
    };
  
    switch (action.type) {
      case types.SET_EXPRESSION:
        if (['+', '/', '*', '%'].includes(action.payload) && !expression) {
            return `${total}${action.payload}`
        }
        return `${!expression && total ? total : ''}${expression + action.payload}`
        default:
            return expression;
    };
};

export const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_EXPRESSION:
            let expression = setExpression(state, action);
            return {
                ...state,
                expression,
                total: calculate(expression)
            };
        case types.DELETE:
            let decreaseExpression = state.expression.split('').slice(0, -1).join('');
            return {
                ...state,
                expression: decreaseExpression
            };
        case types.DELETE_ALL:
            return {
                ...state,
                expression: '',
                total: 0
            };
        case types.EVALUATE_EXPRESSION:
            return {
                ...state,
                expression: '',
                total: calculate(state.expression) || state.expression || state.total
            }
        default:
            return state;
    };
};

