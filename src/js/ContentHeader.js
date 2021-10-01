import 'css/ContentHeader.css'

const ContentHeader = ({state, title, theme, fadeAlignment}) => {
    return (
        <div class={'header-container ' + state}>
            <p class={'content-title ' + theme}>{title}</p>
            <hr class={'content-underline ' + theme + ' ' + fadeAlignment}/>
        </div>
    )
}

export default ContentHeader