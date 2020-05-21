import React from 'react';

import './App.css';

function App() {
  const insert = (num) =>  {
    document.form.textview.value = document.form.textview.value + num
  };

  const equal = () => {
    let exp = document.form.textview.value;
    if (exp) {
      document.form.textview.value = eval(exp);
    }
  };

  const clean = () =>  {
    document.form.textview.value = '';
  };

  const back = ()  => {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1)
  };
  return (
    <div className="App">
      <div className='bg'></div>
      <div className='main'>
        <form name="form">
          <input className='textview' name="textview"/>
        </form>
        <table>
          <tr>
            <td><input className='button' type="button" value='C' onClick="clean()"/></td>
            <td><input className='button' type="button" value='<' onClick="back()"/></td>
            <td><input className='button' type="button" value='/' onClick="insert('/')"/></td>
            <td><input className='button' type="button" value='x' onClick="insert('*')"/></td>
          </tr>
          <tr>
            <td><input className='button' type="button" value='7' onClick="insert(7)"/></td>
            <td><input className='button' type="button" value='8' onClick="insert(8)"/></td>
            <td><input className='button' type="button" value='9' onClick="insert(9)"/></td>
            <td><input className='button' type="button" value='-' onClick="insert('-')"/></td>
          </tr>
          <tr>
            <td><input className='button' type="button" value='4' onClick="insert(4)"/></td>
            <td><input className='button' type="button" value='5' onClick="insert(5)"/></td>
            <td><input className='button' type="button" value='6' onClick="insert(6)"/></td>
            <td><input className='button' type="button" value='+' onClick="insert('+')"/></td>
          </tr>
          <tr>
            <td><input className='button' type="button" value='1' onClick="insert(1)"/></td>
            <td><input className='button' type="button" value='2' onClick="insert(2)"/></td>
            <td><input className='button' type="button" value='3' onClick="insert(3)"/></td>
            <td rowSpan="5"><input className='button'   type="button" value='=' onClick="equal()"/>
            </td>
          </tr>
          <tr>
            <td colSpan="2"><input className='button'   type="button" value='0' onClick="insert(0)"/>
            </td>
            <td><input className='button' type="button" value='.' onClick="insert('.')"/></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
