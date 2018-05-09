import {
  createStore
} from "redux";

const store = createStore((state = {
  count: 0
}, action) => {
  
  switch (action.type) {
    
    case "INCREMENT":
    const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case "DECREMENT":
    const decreaseby = typeof action.decreaseby==="number" ? action.decreaseby : 1
      return {
        count: state.count - decreaseby
      };
      case "MULTIPLYBYTEN":
    const multiply10 = typeof action.multiply10==="number" ? action.multiply10 : 1
      return {
        count: state.count * multiply10
      };
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

store.dispatch({
  type: "DECREMENT",
  decreaseby : 20
});

store.dispatch({
  type: "DECREMENT"
});

store.dispatch({
  type:"MULTIPLYBYTEN",
  multiply10 : 10
})

unsubscribe();

store.dispatch({
  type: "DECREMENT"
});
store.dispatch({
  type: "RESET"
});
store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "INCREMENT"
});
