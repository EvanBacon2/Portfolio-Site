import 'css/NavPageIcon.css';

import {ReactComponent as GithubCutout} from 'svg/github-cutout.svg';
import {ReactComponent as LinkedinCutout} from 'svg/linkedin-cutout.svg';
import {ReactComponent as FigmaCutout} from 'svg/figma-cutout.svg';
import {ReactComponent as WebsiteCutout} from 'svg/website-cutout.svg';
import {ReactComponent as AppStoreCutout} from 'svg/app-store-cutout.svg';

export default function NavPageIcon(props) {
    return (
        <div class='nav-page-icon-background'>
            {cutout(props.type)}
        </div>
    );
}

function cutout(type) {
    switch (type) {
        case 'github': return <GithubCutout class='nav-page-icon github'/>
        case 'linkedin': return <LinkedinCutout class='nav-page-icon linkedin'/>
        case 'figma': return <FigmaCutout class='nav-page-icon figma'/>
        case 'website': return <WebsiteCutout class='nav-page-icon website'/>
        case 'app-store': return <AppStoreCutout class='nav-page-icon app-store'/>
    }
}