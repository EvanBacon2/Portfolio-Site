import { Children, useState } from 'react'

import PageIndex from 'js/PageIndex'
import SvgButton from 'js/SvgButton'

import 'stylesheets/ShowcaseGallery.css'

import {ReactComponent as Chevron} from 'svg/chevron.svg'

const ShowcaseGallery = ({theme, layout, captions, children}) => {
    const [page, setPage] = useState(0)
    const pageCount = Children.toArray(children).length;

    const shiftPage = (direction) => {
        const newPage = page + direction;
        if (newPage >= 0 && newPage < pageCount) {
            setPage(page + direction)
            document.getElementById(theme + '-showcase-image-list').style.transform = 'translateX(-' + newPage * 12.1875 + 'em)'
        }
    }
    
    return (
        <div className='showcase-gallery'>
            <div className='showcase-gallery-screen'>
                <SvgButton layout='showcase-chevron-layout left' theme={theme}>
                    <Chevron className='showcase-chevron left' onClick={() => shiftPage(-1)}/>
                </SvgButton>
                <div className={'showcase-border-container ' + layout + ' ' + theme}>
                    <div className={'showcase-border ' + theme + ' ' + layout}>
                        <div id={theme + '-showcase-image-list'} className='showcase-image-list'>
                            {children}
                        </div>
                    </div>
                </div>
                <SvgButton layout='showcase-chevron-layout right' theme={theme}>
                    <Chevron className='showcase-chevron right' onClick={() => shiftPage(1)}/>
                </SvgButton>
            </div>
            <PageIndex theme={theme} captions={captions} currPage={page}/>
        </div>
    )
}

export default ShowcaseGallery