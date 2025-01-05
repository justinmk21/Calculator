import { useState } from 'react'
import './App.css'



function App() {

  const [display, setDisplay] = useState('');
  function appendToDisplay(input) {
    setDisplay(prevState => prevState + input);
  };

  // eslint-disable-next-line react/prop-types
  function Button( {number, onClick} ) {
    return (
      <div>
        <button onClick={onClick}>{number}</button>
      </div>
    );};

  function clearDisplay() {
    setDisplay('');
  };

  function calculate() {
    try {
      setDisplay(eval(display).toString());
    }
    catch {
      setDisplay('Error');
    }
  }


  return (
    <>
    <h1>Simple Calculator</h1>
      <input type='text' id='display' placeholder='Answer' readOnly value={ display }/>
      <div id='calculator'>
          <div id='keys'>
              <Button number='+' onClick={() => appendToDisplay('+')}/>
              <Button number='7' onClick={() => appendToDisplay('7')}/>
              <Button number='8' onClick={() => appendToDisplay('8')}/>
              <Button number='9' onClick={() => appendToDisplay('9')}/>
              <Button number='-' onClick={() => appendToDisplay('-')} id="operator-btn"/>

              <Button number={'4'} onClick={() => appendToDisplay('4')}/>
              <Button number={'5'} onClick={() => appendToDisplay('5')}/>
              <Button number={'6'} onClick={() => appendToDisplay('6')}/>
              <Button number={'*'} onClick={() => appendToDisplay('*')} className="operator-btn"/>

              <Button number={'1'} onClick={() => appendToDisplay('1')}/>
              <Button number={'2'} onClick={() => appendToDisplay('2')}/>
              <Button number={'3'} onClick={() => appendToDisplay('3')}/>
              <Button number={'/'} onClick={() => appendToDisplay('/')} className="operator-btn"/>

              <Button number={'0'} onClick={() => appendToDisplay('0')}/>
              <Button number={'.'} onClick={() => appendToDisplay('.')}/>
              <Button number={'='} onClick={calculate} className="operator-btn"/>
              <Button number={'C'} onClick={clearDisplay} className="operator-btn"/>
          </div>
      </div>

    </>
  )
}

export default App
