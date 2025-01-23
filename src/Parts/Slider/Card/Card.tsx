import { JSX } from 'react';

import style from './Card.module.scss';
import { If } from '../../../components';


export interface cardProps {
    hasButton: boolean;
    imgSrc: string;
    description: string;
    title: string;
    index: number;
}

export function Card({hasButton, description, title, index, imgSrc}: cardProps): JSX.Element {
    return (
        <div className={style.card}>
            <div className="holder">
                <img src={imgSrc} alt="" />

                <div className={style.right}>
                    <div className={style.title}>
                        <p>
                            {
                                title.split(' ').map((el, i) => {
                                    return <span 
                                        key={i} 
                                        style={{color: i == index ? 'blue' : 'black' }}
                                    >{el}{' '}</span>
                                })
                            }
                        </p>
                    </div>

                    <div className="description">
                        <p>{description}</p>
                    </div>
                    
                    <If
                        condition={hasButton}
                        element={
                            <div className={style.button}>
                                <div className={style.but_container}>
                                    <div className={style.svg}>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 12L20 12L14 6" stroke={'white'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>

                                    <button>Learn more</button>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
}