import 'css/ShowcaseFade.css'

const ShowcaseFade = ({ showcaseState, children}) => {
    const fadeState = () => {
        switch(showcaseState) {
            case 'show-init': return ''
            case 'no-showcase': return 'fade-out'
            default: return 'fade-in'
        }
    }

    return (
        <div className={'showcase-fade ' + fadeState()}>
            {children}
        </div>
    )
}

export default ShowcaseFade