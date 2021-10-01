import 'css/Overlay.css';

const Overlay = ({ navState }) => {
    return (
        <div id='overlay-container'>
            <div class={'overlay left ' + navState}/>
            <div class={'overlay right ' + navState}/>
        </div>
    )
}

export default Overlay