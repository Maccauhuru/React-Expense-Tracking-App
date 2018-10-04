import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('should correctly add up multiple expenses ',()=>{
const total = selectExpensesTotal(expenses)
expect(total).toBe(114195);
});

test('should correctly add up a single expense',()=>{
const total = selectExpensesTotal([expenses[0]]);
expect(total).toBe(195);
});

test('should return 0 if no expense',()=>{
const check = selectExpensesTotal([]);
expect(check).toBe(0);
});

// const total = getExpensesTotal(expenses);
// console.log(total);//114195