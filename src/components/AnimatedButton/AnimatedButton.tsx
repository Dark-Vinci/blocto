interface animatedButton {
    content: string;
    backgroundColor: string;
}

export function AnimatedButton({content, backgroundColor}: animatedButton): JSX.Element {
    return (
        <div className="animated" style={{backgroundColor: backgroundColor}}>
            <div className="icon" style={{backgroundColor: backgroundColor == "white" ? "blue": "white"}}>ICON</div>
            <button style={{backgroundColor: 'inherit'}}>{content}</button>
        </div>
    )
}