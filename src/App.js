import React from 'react';

import './App.css';

class App extends React.Component {
    state = {
        val: ""
    }
    insert = (e) => {

        debugger
         const num = this.state.val + e.currentTarget.value

        this.setState({
            val:num
        })
    };

    equal = () => {
        let exp = this.state.val;
        if (exp) {
            this.state.val = eval(exp);
        }
    };

    clean = () => {
        this.state.val = '';
    };

    back = () => {
        let exp = this.state.val;
        this.state.val = exp.substring(0, exp.length - 1)
    };
    render = () => {


        return (
            <div className="App">
                <div className='bg'></div>
                <div className='main'>

                    <input className='textview' name="textview" value={this.state.val}/>

                    <table>
                        <tr>
                            <td><input className='button' type="button" value='C' onClick={this.clean}/></td>
                            <td><input className='button' type="button" value='<' onClick={this.back}/></td>
                            <td><input className='button' type="button" value='/' onClick={this.insert}/></td>
                            <td><input className='button' type="button" value='x' onClick={this.insert}/></td>
                        </tr>
                        <tr>
                            <td>
                                <button className='button' type="button" value={7} onClick={this.insert}>7</button>
                            </td>
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
}

export default App;
