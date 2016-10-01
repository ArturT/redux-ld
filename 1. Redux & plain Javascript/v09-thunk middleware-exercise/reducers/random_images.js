function randomImages(currentState, action) {
  var DEFAULT_STATE = { urls: [], status: 'Please click the "Random Images" button.' };
  var nextState = Object.assign({}, currentState)

  if (currentState === undefined) {
    nextState = DEFAULT_STATE;
    return nextState;
  }

  switch (action.type) {
    case 'RANDOM_IMAGES_LOADING':
      nextState.status = 'is loading...'
      return nextState;
    case 'SHOW_RANDOM_IMAGES':
      nextState.status = 'loaded'
      nextState.urls = $.map(action.data, function(n) {
        return n.link;
      });
      return nextState;
    default:
      nextState = currentState;
      return nextState;
  }
}
