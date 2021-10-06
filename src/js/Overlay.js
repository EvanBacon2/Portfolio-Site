import 'stylesheets/Overlay.css';

const Overlay = ({ navState }) => {
    return (
        <div id='overlay-container'>
            <div className={'overlay left ' + navState}/>
            <div className={'overlay right ' + navState}/>
        </div>
    )
}

export default Overlay