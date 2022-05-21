export const calculate = (expression) => {
    return {
        type: 'SET_EXPRESSION',
        payload: expression
    };
};

export const deleteOne = () => {
    return {
        type: 'DELETE'
    };
};

export const deleteAll = () => {
    return {
        type: 'DELETE_ALL'
    };
};

export const evaluate = () => {
    return {
        type: 'EVALUATE_EXPRESSION'
    };
};
