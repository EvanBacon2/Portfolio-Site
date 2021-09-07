import 'css/PageIndex.css';

export default function PageIndex(props) {
    const captionForIndex = (index) => {
        return <h1 id='page-caption' class='no-highlight'>{props.captions[index]}</h1>
    }

    return (
        <div class='page-index-container'>
            {captionForIndex(props.currPage)}
            <ul id='index-list'>
                {props.captions.map((caption, index) => {
                    const selectionClass = index === props.currPage ? 'selected' : '';
                    return <li class={'index-dot no-highlight ' + selectionClass}>&bull;</li>
                })}
            </ul>
        </div>
    );
}