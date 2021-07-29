import React, {useState} from 'react';
import styled  from 'styled-components';
import './App.css';
// import Navbar from './navbar'

const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 8px;
  
`;

function App(){

  const [number, setNumber] = useState('')
  const handleNumberImput = (e) =>{
    setNumber(e.target.value)
  }
  const [gorjeta, setGorjeta] = useState('')
  const handleGorjeta = (e) =>{
    setGorjeta(e.target.value)
  }
  
  const valGorjeta = Number((number*gorjeta)/100)
  const total = Number(parseFloat(number) + valGorjeta)
  return <>
  <h1>Calculadora de gorjeta</h1>

  <><p>Quanto deu a conta?</p></>
  <Input type="text" value={number} onChange={handleNumberImput}/>

  <><p>Qual a percentagem de gorjeta?</p></>
  <Input type="text" value={gorjeta} onChange={handleGorjeta}/>

   <>
   {number.length > 0 ? <p>Sub total: <strong>R$ {number}</strong></p> : ''}
   {number.length > 0 ? <p>Sub total: <strong>{` (${gorjeta}%): R$ ${valGorjeta}`}</strong></p> : ''}
   {number.length > 0 ? <p><strong>{`Total: R$ ${total} `}</strong></p> : ''}
   </>

   </>
}

export default App;