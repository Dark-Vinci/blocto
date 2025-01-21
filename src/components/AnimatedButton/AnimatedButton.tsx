import { JSX } from 'react';
import style from './AnimatedButton.module.scss';

interface animatedButton {
    content: string;
    backgroundColor: string;
}

export function AnimatedButton({content, backgroundColor}: animatedButton): JSX.Element {
    return (
        <div 
            className={style.container} 
            style={{
                backgroundColor: backgroundColor === 'blue' ? '#0275FF': 'white',
                border: backgroundColor === 'blue' ? 'none': '1px solid #5F7993',
            }}>
            <div className="icon" style={{backgroundColor: backgroundColor === "white" ? "#0275FF": "white"}}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L20 12L14 6" stroke={backgroundColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>

            </div>
            <button style={{backgroundColor: 'inherit', color: backgroundColor === 'white' ? 'black': 'white'}}>{content}</button>
        </div>
    )
}