import { useEffect } from 'react';

import 'css/ShowcaseFade.css'

const ShowcaseFade = ({showcaseCallback, show, children}) => {
    useEffect(() => {
        if (!show) setTimeout(() => showcaseCallback(''), 600)
    }, [show])

    return (
        <div class={'showcase-fade ' + (show ? '' : 'fade-out')}>
            {children}
        </div>
    )
}

export default ShowcaseFade