import { useState, useEffect} from 'react';

import SiteHeader from 'js/SiteHeader';
import ScrollPrompt from 'js/ScrollPrompt';

import 'css/LandingPage.css';

export default function LandingPage() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    const hiddenElements = document.getElementsByClassName('hide')
    Array.prototype.map.call(hiddenElements, (element) => {
        const bottomOfObject = element.getBoundingClientRect()['bottom'];
        const bottomOfWindow = window.innerHeight;
        if (bottomOfObject < bottomOfWindow) {
            element.classList.remove('hide');
            element.classList.add('show');
        }     
    }); 

    var hidePrompt = 'show-prompt';
    if (offset !== 0) {            
        hidePrompt = 'hide-prompt';
    }
    
    return (
        <div id='landing-page'>               
            <SiteHeader layoutClass='header-layout'/>
            <ScrollPrompt layoutClass={'scroll-prompt-layout ' + hidePrompt}/>
            <span>{window.scrollTop}</span>
        </div>
    );
}
