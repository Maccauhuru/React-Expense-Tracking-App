import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from './store/ConfigureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import  getVisibleExpenses  from './selectors/expenses';


const store = configureStore();

 store.dispatch(addExpense({ description : 'water bill',amount : 40000 ,createdAt :20000}));
 store.dispatch(addExpense({description: 'gas bill',amount : 89000 ,createdAt :28000}));
 store.dispatch(addExpense({ description : 'rent bill',amount : 158900 ,createdAt :25000}));
//  store.dispatch(setTextFilter('water'));

// setTimeout(() => {
// store.dispatch(setTextFilter('bill'));
//  }, 3000);

 const state = store.getState();
 const visibleExpenses = getVisibleExpenses(state.expenses,state.filters) 
 console.log(visibleExpenses); //returns only the filtered objects

//console.log(store.getState());
//store.dispatch(setTextFilter('water'));

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);
const appRoot = document.getElementById("app-info");

ReactDOM.render(jsx, appRoot);
