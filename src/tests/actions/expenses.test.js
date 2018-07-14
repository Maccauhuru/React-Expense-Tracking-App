import { addExpense, removeExpense, editExpense } from '../../actions/expenses';


test('should setup removeExpense action object',()=>{
    const result = removeExpense({id : '123dc'});
    expect(result).toEqual(
        {
            type: 'REMOVE_EXPENSE',
            id : '123dc'
        }
    );
});

test('should setup editExpense action object',()=>{
const result = editExpense('12345abc', {note :'new note value'});
expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id  : '12345abc',
        updates :{
            note :'new note value'
        }
});
});

test('should setup addExpense action object with provided values',()=>{
const expenseData = {
    description:'Renovations',
    notes:'Major house renovations',
    amount:1000000,
    createdAt:1531531300539
}
const action = addExpense(expenseData);
expect(action).toEqual({
type :'ADD_EXPENSE',
expense :{
    ...expenseData,
    id : expect.any(String)
}
})
});


test("should setup addExpense action object with default values", () => {
    const expenseData = {
            description :'',
            notes : '',
            amount : 0,
            createdAt : 0
    }

const action = addExpense();
expect(action).toEqual({
    type : 'ADD_EXPENSE',
    expense :{
       ...expenseData,
       id : expect.any(String)
    }
})
});
