import { Children, useState } from 'react';

import PageIndex from 'js/PageIndex';
import SvgButton from 'js/SvgButton';

import '../css/ShowcaseGallery.css'

import {ReactComponent as Chevron} from 'svg/chevron.svg';

export default function ShowcaseGallery(props) {
    const [page, setPage] = useState(0);
    const pageCount = Children.toArray(props.children).length;

    const shiftPage = (direction) => {
        const newPage = page + direction;
        if (newPage >= 0 && newPage < pageCount) {
            setPage(page + direction);
            document.getElementById(props.theme + '-showcase-image-list').style.transform = 'translateX(-' + newPage * 12.1875 + 'em)'
        }
    }
    
    return (
        <div class='showcase-gallery'>
            <div class='showcase-gallery-screen'>
                <SvgButton layoutClass='showcase-chevron-layout left' theme={props.theme}>
                    <Chevron class='showcase-chevron left' onClick={() => shiftPage(-1)}/>
                </SvgButton>
                <div class={'showcase-border-container ' + props.layout + ' ' + props.theme}>
                    <div class={'showcase-border ' + props.theme + ' ' + props.layout}>
                        <div id={props.theme + '-showcase-image-list'} class='showcase-image-list'>
                            {props.children}
                        </div>
                    </div>
                </div>
                <SvgButton layoutClass='showcase-chevron-layout right' theme={props.theme}>
                    <Chevron class='showcase-chevron right' onClick={() => shiftPage(1)}/>
                </SvgButton>
            </div>
            <PageIndex theme={props.theme} captions={props.captions} currPage={page}/>
        </div>
    );
}