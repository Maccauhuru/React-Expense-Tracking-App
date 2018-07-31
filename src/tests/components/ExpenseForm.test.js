import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';


test('should render expense form correctly',()=>{
 const wrapper = shallow(<ExpenseForm />);
 expect(wrapper).toMatchSnapshot();
});

test('should render expense form with some data',()=>{
const wrapper = shallow(<ExpenseForm expenses={expenses[0]}/>);
expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission',()=>{
const wrapper = shallow(<ExpenseForm />);
expect(wrapper).toMatchSnapshot();
wrapper.find('form').simulate('submit',{
   preventDefault : ()=>{  
   } 
})
expect(wrapper.state('error').length).toBeGreaterThan(0);
expect(wrapper).toMatchSnapshot();
});

test('should set description of input change',()=>{
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target : { value }
    });
expect(wrapper.state('description')).toBe(value);
});

test('should set note on textArea change',()=>{
   const value = "new note";
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('textarea').simulate('change',{
       target : { value }
   });
   expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input',()=>{
const wrapper = shallow(<ExpenseForm />);
const value = '10.22';
wrapper.find('input').at(1).simulate('change',{
    target : { value }
});
expect(wrapper.state('amount')).toBe(value);
});


test('should not set amount if invalid input',()=>{
const wrapper = shallow(<ExpenseForm />);
const value = '10.2236';
wrapper.find('input').at(1).simulate('change',{
    target : { value }
});
expect(wrapper.state('amount')).toBe('');
});