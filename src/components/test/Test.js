import React, { Component } from 'react'

class Test extends Component {

    state = {
        id: 0,
        userId: '',
        title: ''
    }

    // componentWillMount() {
    //     console.log('componentWillMount');
    // }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    id: data.id,
                    userId: data.userId,
                    title: data.title
                });
                console.log(data);
            });
    }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate');
    // }

    // componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }

    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log('componentWillReceiveProps: ' + nextProps + ', ' + nextState);
    // }

    // static getDerivedStateFromProps(props, state) {
    //     // if (state.value !== props.value) {
    //     //     return {
    //     //       derivedValue: deriveValueFromProps(props),
    //     //       mirroredProp: props.value
    //     //     }
    //     //    }
    //     // when null is returned no update is made to the state
    //     return null;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('getSnapshotBeforeUpdate')
    // }

    render() {
        
        console.log('render');

        const { title } = this.state;

        return (
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
}


export default Test;