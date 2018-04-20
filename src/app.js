import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = ()=>(
  <div>Lets get started with React Router 101</div>
);

const AddExpenseComponent = ()=>(
  <div>Lets get started adding expenses</div>
);

const EditExpensesComponent = () => <div>Lets EDIT expenses</div>;

const HelpPageComponent = () => <div>Lets get some HELP</div>;

const routes =
<BrowserRouter>
<div>
<Route path="/" component={ExpenseDashboardPage} exact={true}/>
<Route path="/create" component={AddExpenseComponent}/>
<Route path="/edit" component={EditExpensesComponent}/>
<Route path="/help" component={HelpPageComponent}/>
</div>
</BrowserRouter>
;


let appRoot = document.getElementById("app-info");
ReactDOM.render(routes,appRoot);

