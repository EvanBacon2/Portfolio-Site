import ContentHeader from './ContentHeader.js'

import '../css/Links.css'
import '../css/ColorClasses.css'

const Links = ({state, theme, children}) => {    
    return (
        <div class='links-container'>
            <ContentHeader title='Links' state={state} theme={theme} fadeAlignment='left'/>
            <div class='links-list'>
                {children}
            </div>
        </div>
    )
}

export default Links