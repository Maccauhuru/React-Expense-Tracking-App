import {
  createStore,
  combineReducers
} from 'redux';
import uuid from 'uuid';
{ /*CREATE ACTION GENERATORS*/ }

//ADD_EXPENSE
const addExpense = (
  {description ='',
  notes='',
  amount=0,
  createdAt=0
}= {}
)=>({
type : 'ADD_EXPENSE',
expense : {
  id : uuid(),
  description,
  notes,
  amount,
  createdAt
}
})

//REMOVE_EXPENSE
const removeExpense = (
{
id = expenseOne.expense.id
} ={}
)=>(
  {
    type : 'REMOVE_EXPENSE',
    expense :{
      id: uuid(),
    }
  }
)


//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE


{ /*EXPENSES REDUCER*/ }
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case'ADD_EXPENSE' :
     return [...state,action.expense]
     case 'REMOVE_EXPENSE' :
     return [...state]
    default: return state;
  }
};

{ /*FILTERS REDUCER*/ }
const filtersReducerDefaultStates = {
text : '',
sortBy : 'date',
startDate : undefined,
endDate : undefined
}
const filtersReducer = (state = filtersReducerDefaultStates,action)=>{
switch(action.type){
  default : return state;
}
}

{ /*STORE CREATION*/ }
const store = createStore(combineReducers({
  expenses : expensesReducer,
  filters : filtersReducer
}));

store.subscribe(()=>{
console.info(store.getState());
}
)

const expenseOne = store.dispatch(addExpense({description:'Rent',amount: 100}));
const expenseTwo = store.dispatch(addExpense({ description: 'Food', amount: 500 }));
console.log(ADD_EXPENSE);

store.dispatch(removeExpense({
  id : expenseOne.expense.id
}));

const demoState = {
  expenses: [{
    id: 'wjafnianfpifreij',
    description: 'July Rental Expenses',
    notes: 'some notes',
    amount: 455678,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};