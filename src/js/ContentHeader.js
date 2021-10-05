import 'stylesheets/ContentHeader.css'

const ContentHeader = ({state, layout, title, theme, fadeAlignment}) => {
    return (
        <div className={'header-container ' + state + ' ' + layout}>
            <p className={'content-title ' + theme}>{title}</p>
            <hr className={'content-underline ' + theme + ' ' + fadeAlignment}/>
        </div>
    )
}

export default ContentHeader