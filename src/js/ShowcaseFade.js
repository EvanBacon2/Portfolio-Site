import 'css/ShowcaseFade.css'

const ShowcaseFade = ({ showcaseState, children}) => {
    const fadeState = () => {
        switch(showcaseState) {
            case 'showcase': return 'fade-in'
            case 'no-showcase': return 'fade-out'
            default: return ''
        }
    }

    return (
        <div class={'showcase-fade ' + fadeState()}>
            {children}
        </div>
    )
}

export default ShowcaseFade