import 'css/ContentHeader.css';

export default function ContentHeader(props) {
    return (
        <div class={'header-container ' + props.state}>
            <div class={'content-title ' + props.theme}>{props.title}</div>
            <hr class={'content-underline ' + props.theme + ' ' + props.fadeAlignment}/>
        </div>
    );
}