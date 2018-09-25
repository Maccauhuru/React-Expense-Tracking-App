import React from 'react';
 import moment from 'moment';
import selectExpensesTotal from '../../selectors/expenses-total';
const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should correctly add up multiple expenses ',()=>{
const total = expenses.map(item=>item.amount).reduce((acc, curr) => {
    return acc + curr;
});
expect(total).toEqual(114195);
});

test('should correctly add up a single expense',()=>{
const total = expenses.map(item => item.amount).filter(item => item !== undefined || item!==0);
expect(total.length).toBe(3);
});

test('should return 0 if no expense',()=>{
const check = expenses.map(items=>items.amount);
expect(check.length).not.toBe(0);
});

// const total = getExpensesTotal(expenses);
// console.log(total);//114195