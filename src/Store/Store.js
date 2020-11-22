export default (state, action) => {
  switch (action.type) {
    case 'SET_CWD':
      return state.set('cwd', action.data);
    case 'SET_GIT':
      return state.set('git', action.data);
    case 'SET_UID':
      return state.set('panel-uid', action.data);
    case 'SET_PID':
      if (action.data === undefined) {
        return state;
      }

      return state.set('pid', action.data);

    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD': {
      return state.set('spark', action.config.spark)
    }

    default:
      break
  }


  return state;
};
