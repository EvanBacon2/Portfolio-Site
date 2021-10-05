import 'css/HeadShot.css'

const HeadShot = ({ layout }) => {
    return (
        <div id='headshot-container' className={layout}>
            <div className='grad-photo-background'/>
            <img className='grad-photo' src='grad_photo.png' alt='My face'/>
        </div>
    )
}

export default HeadShot