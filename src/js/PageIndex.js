import { React, Component } from 'react';

import 'css/PageIndex.css';

export default class PageIndex extends Component {
    captionForIndex = (index) => {
        return <h1 id='page-caption'>{this.props.captions[index]}</h1>
    }

    render() {
        return (
            <div id='page-index'>
                {this.captionForIndex(this.props.currPage)}
                <ul id='index-list'>
                    {this.props.captions.map((caption, index) => {
                        const selectionClass = index === this.props.currPage ? 'selected' : '';
                        return <li class={'index-dot ' + selectionClass}>&bull;</li>
                    })}
                </ul>
            </div>
        );
    }
}