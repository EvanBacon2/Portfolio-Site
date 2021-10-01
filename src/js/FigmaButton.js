import { useState } from 'react'

import 'css/SvgButton.css'

import {ReactComponent as FigmaIcon} from '../svg/figma.svg'
import {ReactComponent as FigmaColorIcon} from '../svg/figma-color.svg'

const FigmaButton = ({active, boxClass}) => {
    const [clickAnimation, setClickAnimation] = useState('')

    const onClick = () => {
        setClickAnimation('')
        setClickAnimation('click-animation')
        setTimeout(() => setClickAnimation(''), 400)
    }

    return (
        <div class={'svg-button-box ' + active} onClick={onClick}>
            <FigmaColorIcon class={'svg-button-shadow ' + boxClass}/>
            <div class={'svg-button-mover ' + clickAnimation}>
                <FigmaIcon class={'svg-button ' + boxClass}/>
            </div>
        </div>
    );
}

export default FigmaButton