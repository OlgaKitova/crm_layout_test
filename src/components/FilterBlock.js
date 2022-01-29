import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import Input from './Input';
import {hideShowFilter} from '../reducers/hideFilterBlock';

const inputName = [
    {placeholder: 'Дата от', type: 'text'},
    {placeholder: 'Дата до', type: 'text'},
    {placeholder: 'Имя клиента', type: 'text'},
    {placeholder: 'Телефон', type: 'number'},
    
]

export default function FilterBlock() {
    const sidebar = useSelector(state => state.sidebar.value);
    const filterblock = useSelector(state => state.filterblock.value);
    const dispatch = useDispatch();

  return <section 
                className={
                filterblock && sidebar ? 
                'filter showFilter leftShift' 
                : sidebar 
                ? 'filter leftShift' 
                : filterblock
                ? 'filter showFilter rightShift'
                : 'filter rightShift'}>
      <div className="filter__head">
      <h2 className="filter__title">Filter Block</h2>
      <div className="filter__img" onClick={() => {
          console.log(filterblock)
          dispatch(hideShowFilter())
      }}>
          <img src="./img/gear.png" alt="gear"/>
          </div>
      </div>
      <div className="filter__block">
      <div className="filter__block--one">
      {inputName.map(((name, index) => {
         return <Input key={name.type+index} placeholder={name.placeholder} type={name.type}/>
      }))}
      </div>
      <div className="filter__block--two">
      {inputName.map(((name, index) => {
         return <Input key={name.type+(index+1)} placeholder={name.placeholder} type={name.type}/>
      }))}
      </div>
      </div>
  </section>
}
