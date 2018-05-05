// @flow
/**
 * @fileoverview A basic component for demonstrating how you would write a component using flow instead of PropTypes.
 * For example passing a string to the prop `delay` will result in a error and some IDE's such as WebStorm and Pycharm
 * can even mark it as an error without running
 */
import * as React from 'react'
import {toCaps} from "./utils";

type Props = {
    delay: number,
    text: string,
    loading: React.Node
}

type State = {
    _loading: boolean
}

class DelayedText extends React.Component<Props, State> {
    state = {
        _loading: false
    };

    componentDidMount() {
        this.setState({
            _loading: true
        });

        setTimeout(() => {
            this.setState({
                _loading: false
            });
        }, this.props.delay)
    }

    render() {
        const {_loading} = this.state;
        const loadingComponent = this.props.loading;
        const capitalText = toCaps(this.props.text);
        return _loading ? loadingComponent : <h1> {capitalText} </h1>
    }

}

export default DelayedText
