import 'css/ContentHeader.css';

export default function ContentHeader(props) {
    return (
        <div class={'header-container'}>
            <div class={'content-title ' + props.state + ' ' + props.theme}>{props.title}</div>
            <hr class={'content-underline ' + props.state + ' ' + props.theme + ' ' + props.fadeAlignment}/>
        </div>
    );
}