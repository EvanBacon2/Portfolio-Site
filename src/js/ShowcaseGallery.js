import { Children, useState } from 'react'

import PageIndex from 'js/PageIndex'
import SvgButton from 'js/SvgButton'

import '../css/ShowcaseGallery.css'

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
        <div class='showcase-gallery'>
            <div class='showcase-gallery-screen'>
                <SvgButton layoutClass='showcase-chevron-layout left' theme={theme}>
                    <Chevron class='showcase-chevron left' onClick={() => shiftPage(-1)}/>
                </SvgButton>
                <div class={'showcase-border-container ' + layout + ' ' + theme}>
                    <div class={'showcase-border ' + theme + ' ' + layout}>
                        <div id={theme + '-showcase-image-list'} class='showcase-image-list'>
                            {children}
                        </div>
                    </div>
                </div>
                <SvgButton layoutClass='showcase-chevron-layout right' theme={theme}>
                    <Chevron class='showcase-chevron right' onClick={() => shiftPage(1)}/>
                </SvgButton>
            </div>
            <PageIndex theme={theme} captions={captions} currPage={page}/>
        </div>
    )
}

export default ShowcaseGallery