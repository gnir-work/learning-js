// @flow

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import DelayedText from './DelayedText';

class App extends Component<{}> {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <DelayedText
                    delay={2000}
                    loading={<h1> The text is being loaded right now... </h1>}
                    text="Well hello there my friend"/>
            </div>
        );
    }
}

export default App;
