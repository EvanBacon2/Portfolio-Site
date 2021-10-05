import ContentHeader from './ContentHeader.js'

import '../css/Links.css'

const Links = ({state, theme, children}) => {    
    return (
        <div className='links-container'>
            <ContentHeader title='Links' state={state} theme={theme} fadeAlignment='left'/>
            <div className='links-list'>
                {children}
            </div>
        </div>
    )
}

export default Links