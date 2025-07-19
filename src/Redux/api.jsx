import axios from 'axios';


export const fetchData = ()=>{
  return async (dispatch)=>{
    dispatch({type:'loading'})

    try {
      const res  = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({type:'success',payload:res.data})
    } catch (error) {
       dispatch({type:'error',payload:error.message})
    }
  }
}