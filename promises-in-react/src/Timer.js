/**
 * @fileoverview A basic react app which demonstrates the basic ways to access async data from async code in react.
 * This project covers 3 widely used ways:
 *  - Callbacks: Deprecated and bad (sometimes revered to as callback hell)
 *  Code: {@link Timer.setCallBackTime}
 *
 *  - Promises: A better way to write async code, however it still requires the usage of functions to access the data
 *  from the async code.
 *  Code: {@link Timer.setPromiseTime}
 *  Promises are supported from ECMAScript 2015 (And not supported on explorer)
 *  Refer To: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise} for
 *  more information
 *
 *  - Await/Async: Await and Async are syntactic sugar over promises which lets us write code in a "synchronous" way
 *  when underneath the hood the code is actually async, Which is pretty cool :)
 *  Code: {@link Timer.setAwaitTime}
 *  Await/Async are supported from ECMAScript 2017 (And not supported on explorer)
 *  Refer To: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function} for
 *  more information
 */

import React, {Component} from 'react';
import logo from './logo.svg';
import {getCurrentTimeCallBackSyntax, getCurrentTimePromiseSyntax, getCurrentTimeAwaitSyntax} from './promises';
import './App.css';

class Timer extends Component {
    state = {
        callBackTime: 0,
        promiseTime: 0,
        awaitTime: 0
    };

    /**
     * Create the intervals which will run each of the 3 timers (one for each async code type)
     */
    componentDidMount() {
        this.callBackId = setInterval(this.setCallBackTime, 1000);
        this.promiseId = setInterval(this.setPromiseTime, 1000);
        this.awaitId = setInterval(this.setAwaitTime, 1000);
    }

    /**
     * Make sure that the intervals are cleared when the component is unmounted
     */
    componentWillUnmount() {
        clearInterval(this.callBackId);
        clearInterval(this.promiseId);
        clearInterval(this.awaitId);
    }

    /**
     * Basic callback syntax
     */
    setCallBackTime = () => {
        getCurrentTimeCallBackSyntax(time => {
            this.setState({
                callBackTime: time
            })
        }, error => console.log(error));
    };

    /**
     * Basic promise syntax
     */
    setPromiseTime = () => {
        getCurrentTimePromiseSyntax().then(time => {
            this.setState({
                promiseTime: time
            })
        }).catch(error => console.log(error))
    };

    /**
     * Basic await syntax, Please note that the arrow function is prefixed with the async keyword as the code
     * inside of it is written with await
     * @returns {Promise.<void>}
     */
    setAwaitTime = async () => {
        try {
            let time = await getCurrentTimeAwaitSyntax();
            this.setState({
                awaitTime: time
            })
        } catch (err) {
            // Handle the error here
            console.log(err)
        }
    };

    /**
     * Render the 3 timers in 3 different paragraphs
     * @returns {XML}
     */
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="call-back-time">
                    Callback timer: {this.state.callBackTime ? this.state.callBackTime.toTimeString() :
                    <strong> Waiting for callback... </strong>}
                </p>
                <p className="promise-time">
                    Promise timer: {this.state.promiseTime ? this.state.promiseTime.toTimeString() :
                    <strong> Waiting for callback... </strong>}
                </p>
                <p className="await-async-time">
                    Promise timer with await: {this.state.awaitTime ? this.state.awaitTime.toTimeString() :
                    <strong> Waiting for callback... </strong>}
                </p>

            </div>
        );
    }
}

export default Timer;
