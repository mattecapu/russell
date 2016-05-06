import React from 'react';
import Immutable from 'immutable';

import MarkdownParagraph from './paragraph';

export default class Note extends React.Component {

    constructor(props) {
        super(props);
        this.addParagraph = this.addParagraph.bind(this);
        this.state = {
            paragraphs: Immutable.List(
                props.paragraphs.length > 0
                    ? props.paragraphs
                    : [{ content: '# _Write here_' }]
            )
        };
    }

    render() {
        return (
            <div className="note">{
                this.state.paragraphs.map(({ content }, index) =>
                    <MarkdownParagraph
                        key={index}
                        content={content}
                        onNew={this.addParagraph}
                        startMode={this.state.paragraphs.length === index + 1}
                    />
                )
            }</div>
        );
    }

    addParagraph() {
        this.setState({
            paragraphs:
                this.state.paragraphs.push({ content: '' })
        });
    }
}
