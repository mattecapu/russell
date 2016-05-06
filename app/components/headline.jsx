import React from 'react';

export default class Headline extends React.Component {

    constructor() {
        super();
        this.handleInput = this.handleInput.bind(this);
    }

    render() {
        return (
            <input type="text" ref="title" placeholder="titolo..." onInput={this.handleInput} />
        );
    }

    shouldComponentUpdate() {
        return false;
    }

    handleInput() {
        this.setState({ title: this.refs.title.value });
    }

    shouldComponentUpdate() {
        return false;
    }
}
