import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state',()=>{
const state = expensesReducer(undefined,{ type : '@@INIT'});
const expensesReducerDefaultState = [];
expect(state).toEqual(expensesReducerDefaultState);
});

test('should remove test by id',()=>{
const action = {
    type: 'REMOVE_EXPENSE',
    id : expenses[1].id
};
const state = expensesReducer(expenses,action);
expect(state).toEqual([expenses[0],expenses[2]]);
});


test('should not remove if id not fount',()=>{
const action = {
    type: 'REMOVE_EXPENSE',
    id : -1
};
const state = expensesReducer(expenses,action);
expect(state).toEqual(expenses);
});

test('should add expense by id',()=>{
const action = {
    type: 'ADD_EXPENSE',
    id : expenses[3]
};
const state = expensesReducer(expenses,action);
expect(state).toEqual([...expenses,expenses[3]]);
});

test('should edit expenses by id',()=>{
const action = {
    type: 'EDIT_EXPENSE',
    id : expenses[1].id
};
const state = expensesReducer(expenses,action);
expect(state).toEqual(expenses);
});


test('should not edit expense if id not exist',()=>{
const action = {
    type: 'EDIT_EXPENSE',
    id : -1
};
const state = expensesReducer(expenses,action);
expect(state).toEqual(expenses);
});