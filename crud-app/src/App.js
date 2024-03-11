
import { useState } from 'react';
import './App.css';
import InputList from './components/InputLists';
import InputLists from './components/InputLists';

function App() {

  const [expense, setExpense] = useState('');
  const [cost, setCost] = useState('');
  

  return (
    <div className='main container flex justify-center items-center w-screen h-screen bg-orange-200'>
      <div className='container-content w-full bg-white md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg'>
        <div className='input-container'>
          <InputLists expense = {expense} setExpense={setExpense} cost={cost} setCost={setCost}/>
        </div>
        <div className='submit-button'>
          <button>제출</button>
        </div>
        <div className='item-list-container'>
          <button>목록 지우기</button>
        </div>
      </div>
    </div>
  );
}

export default App;
