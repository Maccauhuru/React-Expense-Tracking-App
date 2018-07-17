import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
const expenses = [
{
    id : 1,
    description :'Turntable',
    notes : '',
    amount : 14500,
    createdAt : 0
},
{
    id: 2,
    description: 'Sandwich',
    notes: '',
    amount: 299,
    createdAt: moment(0).subtract(4,'days').valueOf()
},
{
    id: 3,
    description: 'Insurance',
    notes: '',
    amount: 12200,
    createdAt: moment(0).add(4 , 'days').valueOf()
},
];


test('should filter by text value',()=>{
const filters = {
text : 'e',
sortBy : 'date',
startDate : moment(0),
endDate : undefined
}   
const result = selectExpenses(expenses,filters)
expect(result).toEqual([expenses [2], expenses[0]]);
});

test('should filter by start date',()=>{
const filters = {
text : '',
sortBy : 'date',
startDate : moment(0),
endDate : undefined
}   
const result = selectExpenses(expenses,filters);
expect(result).toEqual([expenses [2], expenses [0]])
})

//should filter by endDate
test('should filter by endDate',()=>{
const filters = {
text : '',
sortBy : 0,
startDate : undefined,
endDate : moment(0)
} 
const result = selectExpenses(expenses,filters);
expect(result).toEqual([expenses[0],expenses[1]]);    
});

//should sort by date

test('should filter by date',()=>{
const filters={
text : '',
sortBy : 0,
startDate : undefined,
endDate : undefined 
}
const result = selectExpenses(expenses,filters);
expect(result).toEqual([expenses[0],expenses[1],expenses[2]]);
});

//should sort by amount

test('should filter by amount',()=>{
const filters={
text : '',
sortBy : 'amount',
startDate : moment(0),
endDate : undefined 
}
const result = selectExpenses(expenses,filters);
expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});