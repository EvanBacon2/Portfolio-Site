import { React, Component } from 'react';

import 'css/PageIndex.css';

export default class PageIndex extends Component {
    captionForIndex = (index) => {
        return <h1 id='page-caption' class='no-highlight'>{this.props.captions[index]}</h1>
    }

    render() {
        return (
            <div class='page-index-container'>
                {this.captionForIndex(this.props.currPage)}
                <ul id='index-list'>
                    {this.props.captions.map((caption, index) => {
                        const selectionClass = index === this.props.currPage ? 'selected' : '';
                        return <li class={'index-dot no-highlight ' + selectionClass}>&bull;</li>
                    })}
                </ul>
            </div>
        );
    }
}