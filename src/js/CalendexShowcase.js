import ContentHeader from 'js/ContentHeader';
import IosShowcase from 'js/IosShowcase'
import Links from 'js/Links';
import LargeLink from './LargeLink';
import { THEMES } from 'js/Themes';
import SvgButton from 'js/SvgButton';

import 'css/CalendexShowcase.css'

import {ReactComponent as Chevron} from 'svg/chevron.svg';

export default function CalendexShowcase(props) {
    return (
        <div id='calendex-showcase' class={'showcase-container ' + props.state + ' ' + props.theme}>
            <SvgButton layoutClass='showcase-back-button-layout' theme='calendex'>
                <Chevron class='showcase-back-button' onClick={() => props.toggleShowcase('brand')}/>
            </SvgButton>
            <div class='content-layout'>
                <ContentHeader title='Calendex' state={props.state} theme={THEMES.CALENDEX}/>
                <p class='showcase-content-description'>                        
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum
                </p>
            </div>
            <div class='showcase-layout'>
                <IosShowcase/>
            </div>
            <div class='showcase-links-layout'>
                <Links state={props.state} theme={THEMES.CALENDEX}>
                    <LargeLink state={props.state} destination='github' url='https://github.com/EvanBacon2'/>
                    <LargeLink state={props.state} destination='appstore'/>
                </Links>
            </div>
        </div>
    );
}