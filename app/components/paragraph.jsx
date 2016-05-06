import React from 'react';
import RichMarkdown from '../../../react-rich-markdown';

const EDIT = 'edit';
const DISPLAY = 'display';

export default class MarkdownParagraph extends React.Component {
    constructor(props) {
        super(props);

        /* bind class members (annoying) */
        [ 'switchToEdit', 'handleInput' ]
            .forEach((f) => this[f] = this[f].bind(this));

        this.state = {
            mode: props.startMode ? EDIT : DISPLAY,
            content: props.content || ''
        };
    }
    render() {
        if (this.state.mode === DISPLAY) {
            return (
                <div onClick={this.switchToEdit}>
                    <RichMarkdown source={this.state.content} />
                </div>
            );
        } else {
            return (
                <textarea ref="source" onInput={this.handleInput} defaultValue={this.state.content} />
            );
        }
    }

    switchToEdit() {
        this.setState({ mode: EDIT });
    }

    handleInput() {
        if (this.refs.source.value.slice(-2) === '\n\n') {
            this.setState({ mode: DISPLAY });
            this.props.onNew();
        } else {
            this.setState({ content: this.refs.source.value });
        }
    }
}
