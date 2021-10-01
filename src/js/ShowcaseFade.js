import { useEffect } from 'react'

import 'css/ShowcaseFade.css'

const ShowcaseFade = ({showcaseCallback, show, children}) => {
    useEffect(() => {
        /*if (!show) setTimeout(() => showcaseCallback(''), 600)*/
    }, [show])

    const fadeState = () => {
        switch(show) {
            case 'in': return 'fade-in'
            case 'out': return 'fade-out'
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