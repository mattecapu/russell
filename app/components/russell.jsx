import React from 'react';

import Headline from './headline';
import Note from './note';

export default class Russell extends React.Component {
    render() {
        return (
            <main>
                <Headline />
                <Note paragraphs={[]} />
            </main>
        );
    }
}
