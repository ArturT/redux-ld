function images(currentState = {data:[], loading:"Please click the 'Random Images' button"}, action){
    switch (action.type) {
      case 'IMAGES': // look at Note2.1
        return Object.assign({}, currentState, {
          data: action.data,
          loading: "loaded"
        })
      case 'IMAGES_LOADING': // look at Note2.1
        return Object.assign({}, currentState, {
          loading: "loading..."
        })
      default:
        return currentState;
    }
}
