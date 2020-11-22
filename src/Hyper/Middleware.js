import { getCWD } from '../utils/utils';

export default store => next => action => {
  const uids = store.getState().sessions.sessions;

  switch (action.type) {
    case 'SESSION_SET_XTERM_TITLE':
      store.dispatch({
        type: 'SET_UID',
        data: action.uid,
      });

      store.dispatch({
        type: 'SET_PID',
        data: uids[action.uid].pid,
      });
      break;

    case 'SESSION_ADD':
      store.dispatch({
        type: 'SET_PID',
        data: action.pid,
      });

      store.dispatch({
        type: 'SET_UID',
        data: action.uid,
      })

      getCWD(action.pid, store);

      break;

    case 'SESSION_ADD_DATA':
      const { data } = action;
      const enterKey = data.indexOf('\n') > 0;
      const sessionAddDataPid = store.getState().ui.pid;

      if (enterKey) {
        getCWD(sessionAddDataPid, store);
      }
      break;

    case 'SESSION_SET_ACTIVE':
      const sessionSetActivePid = uids[action.uid].pid;

      store.dispatch({
        type: 'SET_UID',
        data: action.uid,
      });

      store.dispatch({
        type: 'SET_PID',
        data: sessionSetActivePid,
      });

      getCWD(sessionSetActivePid, store);

      break;
  }

  next(action);
};
