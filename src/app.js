import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from './store/ConfigureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import  getVisibleExpenses  from './selectors/expenses';




const store = configureStore();

 store.dispatch(addExpense({ description : 'water bill'}));
 store.dispatch(addExpense({ description : 'gas bill'}));

 store.dispatch(setTextFilter('water'));

 const state = store.getState();
 const visibleExpenses = getVisibleExpenses(state.expenses,state.filters) 
 console.log(visibleExpenses); //returns only the filtered objects

//   console.log(store.getState());
//store.dispatch(setTextFilter('water'));

let appRoot = document.getElementById("app-info");
ReactDOM.render(<AppRouter />, appRoot);
