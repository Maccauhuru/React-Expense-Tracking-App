import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = ()=>(
  <div>Lets get started with React Router 101</div>
);

const AddExpense = ()=>(
  <div>Lets get started adding expenses</div>
);

const EditExpense = () => 
<div>Lets EDIT expenses</div>;

const HelpPage = () => 
<div>Lets get some HELP</div>;

const NotFoundPage = () =>
 <div> 404! Page not found </div>;

const routes =
<BrowserRouter>
<Switch>
<Route path="/" component={ExpenseDashboardPage} exact={true}/>
<Route path="/create" component={AddExpense}/>
<Route path="/edit" component={EditExpense}/>
<Route path="/help" component={HelpPage}/>
<Route component={NotFoundPage}/>
</Switch>
</BrowserRouter>
;


let appRoot = document.getElementById("app-info");
ReactDOM.render(routes,appRoot);

