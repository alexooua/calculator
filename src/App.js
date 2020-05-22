import React from 'react';

import './App.css';

class App extends React.Component {
    state = {
        val: ""
    }
    insert = (e) => {
        if (this.state.val==="error"){
            let num =e.currentTarget.value
            this.setState({
                val:num
            })

        }else {
            let num = this.state.val + e.currentTarget.value
            this.setState({
                val: num
            })
        }
    };


    equal = () => {
        let num=String(this.state.val)
        if(num[num.length-1].match(/[0-9]/)){
            num=eval(num)
            this.setState({
                val:num
            })
        }else {
            this.setState({
                val:"error"
            })
        }

    };

    clean = () => {
        this.setState({
            val:""
        })
    };

    back = () => {
        let num= this.state.val+""
        num = num.substring(0, num.length - 1)
        this.setState({
            val:num
        })
    };
    render = () => {


        return (
            <div className="App">
                <div className='bg'></div>
                <div className='main'>

                    <input className='textView' placeholder={'enter'}  value={this.state.val}/>

                    <table>
                        <tr>
                            <td><button className='button'  onClick={this.clean}>C</button></td>
                            <td><button className='button' value='<' onClick={this.back}>{'<'}</button></td>
                            <td><button className='button' value='/' onClick={this.insert}>/</button></td>
                            <td><button className='button' value='*' onClick={this.insert}>*</button></td>
                        </tr>
                        <tr>
                            <td><button className='button' value='7' onClick={this.insert}>7</button></td>
                            <td><button className='button' value='8' onClick={this.insert}>8</button></td>
                            <td><button className='button' value='9' onClick={this.insert}>9</button></td>
                            <td><button className='button' value='-' onClick={this.insert}>-</button></td>
                        </tr>
                        <tr>
                            <td><button className='button' value='4' onClick={this.insert}>4</button></td>
                            <td><button className='button' value='5' onClick={this.insert}>5</button></td>
                            <td><button className='button' value='6' onClick={this.insert}>6</button></td>
                            <td><button className='button' value='+' onClick={this.insert}>+</button></td>
                        </tr>
                        <tr>
                            <td><button className='button' value='1' onClick={this.insert}>1</button></td>
                            <td><button className='button' value='2' onClick={this.insert}>2</button></td>
                            <td><button className='button' value='3' onClick={this.insert}>3</button></td>
                            <td rowSpan="5"><button className='button' style ={{height: '108px'}} onClick={this.equal}>=</button></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><button className='button'  style ={{width: '106px'}} value='0' onClick={this.insert}>0</button></td>
                            <td><button className='button' value='.' onClick={this.insert}>{"."}</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
