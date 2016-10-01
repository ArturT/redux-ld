function sum(currentState = 3, action){
    switch (action.type) {
      case 'SUM': // look at Note2.1
        return parseInt(action.a) + parseInt(action.b);
      default:
        return currentState;
    }
}

function funcWithError(){
    throw Error('an error from sum')
}
