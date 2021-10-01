import 'css/PageIndex.css';

const PageIndex = ({captions, currPage, theme}) => {
    const captionForIndex = (index) => {
        return <h1 id='page-caption' class='no-highlight'>{captions[index]}</h1>
    }

    return (
        <div class='page-index-container'>
            {captionForIndex(currPage)}
            <ul id='index-list'>
                {captions.map((caption, index) => {
                    const selectionClass = index === currPage ? 'selected' : '';
                    return <li class={'index-dot no-highlight ' + selectionClass + ' ' + theme}>&bull;</li>
                })}
            </ul>
        </div>
    )
}

export default PageIndex