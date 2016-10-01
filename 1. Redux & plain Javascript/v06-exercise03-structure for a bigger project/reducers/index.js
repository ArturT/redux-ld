// step 2.2
function counter(currentState, action){
    var DEFAULT_STATE = 0;
    var nextState;
    if (currentState === undefined) {
      nextState = DEFAULT_STATE;
    } else {
      switch(action.type) {
        case 'INCREMENT':
          nextState = currentState + 1;
          break;
        case 'DECREMENT':
          nextState = currentState - 1;
          break;
        default:
          nextState = currentState;
      }
    }
    return nextState;
}
function sum(currentState, action){
    var DEFAULT_STATE = 3;
    var nextState;
    if (currentState === undefined) {
       nextState = DEFAULT_STATE;
    } else {
      if (action.type == 'SUM') {
        nextState = parseInt(action.a) + parseInt(action.b);
      } else {
        nextState = currentState;
      }
    }
    return nextState;
}
function combineReducer(currentState, action) {
    var DEFAULT_STATE = {count:0, sum:3};
    var nextState = Object.assign({},currentState);
    nextState = {
        count:counter(nextState.count, action),
        sum: sum(nextState.sum, action)
    }
    return nextState;
    // if (currentState === undefined) { // look at to Note 1.1

    //     nextState = DEFAULT_STATE;// Note1.2
    //     return nextState;
    // }
    // switch (action.type) {
    //     case 'DECREMENT': // look at Note2.1
    //     nextState.count = currentState.count - 1;
    //     return nextState;// Note2.2
    //     case 'INCREMENT': // look at Note2.1
    //     nextState.count = currentState.count + 1;
    //     return nextState;// Note2.2
    //     case 'SUM': // look at Note2.1
    //     nextState.sum = parseInt(action.a) + parseInt(action.b);
    //     return nextState;// Note2.2
    //     default:
    //     nextState.count = currentState.count;
    //     return nextState;
    // }
}


//~end step 2.2
