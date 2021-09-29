import 'css/ContentHeader.css';

export default function ContentHeader(props) {
    return (
        <div class={'header-container ' + props.state}>
            <p class={'content-title ' + props.theme}>{props.title}</p>
            <hr class={'content-underline ' + props.theme + ' ' + props.fadeAlignment}/>
        </div>
    );
}