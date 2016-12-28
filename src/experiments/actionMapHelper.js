export function makeReducer(initialState, actionMap) {
  const reductions = actions.reduce((accum, action) => {
    accum[action.type] = action.reductionFunction;
    return accum;
  }, {});
  return (state = initialState, action) => {
    const reduction = reductions[action.type];
    if (reduction) {
      return reduction(state, action);
    }
    else {
      return state;
    }
  }
};
