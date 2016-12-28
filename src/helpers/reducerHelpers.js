const camelify = (phrase) => {
  const cased = phrase.split('_').map((phrase) => {
    return phrase.substring(0, 1).toUpperCase() + phrase.substring(1).toLowerCase();
  }).join('');
  return cased.substring(0, 1).toLowerCase() + cased.substring(1);
};

const addType = (actionCreator, type) => {
    function typedActionCreator() {
      return Object.assign({}, actionCreator(...arguments), { type });
    }
    return typedActionCreator;
};

const defaultActionCreator = () => {
  return {};
};

export function makeReducer(initialState, reducerSpec, namespace) {

  const types = Object.keys(reducerSpec).reduce((accum, action) => {
    accum[action] = namespace + action;
    return accum;
  }, {});

  const actionCreators = Object.keys(types).reduce((accum, type) => {
    accum[camelify(type)] = addType(reducerSpec[type].actionCreator || defaultActionCreator, types[type]);
    return accum;
  }, {});

  const reductions = Object.keys(types).reduce((accum, type) => {
    accum[types[type]] = reducerSpec[type].reducer;
    return accum;
  }, {});

  const fn = (state = initialState, action) => {
    const reduction = reductions[action.type];
    if (reduction) {
      return reduction(state, action);
    }
    else {
      return state;
    }
  };

  return { fn, types, actionCreators, reductions };

};
