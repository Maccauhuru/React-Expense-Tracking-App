import {
  createStore
} from "redux";


const incrementCount = ({incrementBy = 1} = {})=>({
  type : 'INCREMENT',
  incrementBy 
}
);

const decreaseCount = ({decrementBy = 1} = {})=>({
  type : 'DECREMENT',
  decrementBy
}
);
const resetCount = () =>({
  type : 'RESET'
});

const setCount = ({count})=>({ 
  type  : 'SET',
  count 
});

//action generators - functions that return action Objects
const store = createStore((state = {
  count: 0
}, action) => {
  
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
      case "MULTIPLYBYTEN":
    const multiply10 = typeof action.multiply10==="number" ? action.multiply10 : 1
      return {
        count: state.count * multiply10
      };
    case "SET":
    return{
      count : action.count
    }
    case "RESET":
      return {
        count: 0
      };
    
    default:
      return state;
  }
});
// store.subscribe(()=>{
// console.log(store.getState());
// }
// );


const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// An obj that gets sent to the store
//Actions examples : increment , decrement , reset

//Action : Increment the coun by 1

store.dispatch({
  type: "INCREMENT",
  incrementBy : 7
});

store.dispatch(incrementCount({incrementBy:20}));
store.dispatch(incrementCount({incrementBy:200}));
store.dispatch(resetCount());
store.dispatch(decreaseCount({decrementBy:100}));
store.dispatch({
  type:"MULTIPLYBYTEN",
  multiply10 : 10
})

store.dispatch(setCount({count:100}));

unsubscribe();

store.dispatch({
  type: "DECREMENT"
});

store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "INCREMENT"
});
