import 'css/PageIndex.css';

const PageIndex = ({captions, currPage, theme}) => {
    const captionForIndex = (index) => {
        return <h1 id='page-caption' className='no-highlight'>{captions[index]}</h1>
    }

    return (
        <div className='page-index-container'>
            {captionForIndex(currPage)}
            <ul id='index-list'>
                {captions.map((caption, index) => {
                    const selectionClass = index === currPage ? 'selected' : '';
                    return <li className={'index-dot no-highlight ' + selectionClass + ' ' + theme} key={index.toString()}>&bull;</li>
                })}
            </ul>
        </div>
    )
}

export default PageIndex