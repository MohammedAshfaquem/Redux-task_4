import {applyMiddleware, createStore} from 'redux'
import {thunk}  from 'redux-thunk'

const initial= {
  data:[],
  loading:false,
  error:''
}
function Fetch(state = initial, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "success":
      return { ...state, loading: false, data: action.payload };
    case "error":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}


const store = createStore(Fetch,applyMiddleware(thunk));

export default store;
