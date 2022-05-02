import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        console.log('Constructor');
        super(props)

        this.state = {
            counter: 0
        }

        this.increment = () => this.setState({counter: this.state.counter+1})
        this.decrement = () => this.setState({counter: this.state.counter-1})
    }
    static getDerivedStateFromProps(props, state) {
        if(props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null;
    }
    componentDidMount() {
        console.log('Component Did Mount');
        console.log('-------------------');
    }
    shouldComponentUpdate(nextProps, nextState) {
        
        if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp)
        {
            console.log('Should Component Update - DO NOT RENDER');
            console.log('-----------------------');
            return false;
        }
        console.log('Should Component Update - RENDER');
        console.log('-----------------------');
        return true;
    }
    render () {
        console.log('Render')

        return <div>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            <div className="counter">
                Counter: {this.state.counter}
            </div>
        </div>
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component Did update');
        console.log('--------------------');
    }
    componentWillUnmount() {
        console.log("Component Will Unmount");
        console.log("-----------------------");
    }
}