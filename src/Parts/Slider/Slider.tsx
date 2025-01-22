import { JSX } from 'react';

import style from './Slider.module.scss';
import { If } from '../../components';
import { title } from 'process';

interface cardProps {
    hasButton: boolean;
    imgSrc: string;
    description: string;
    title: string;
    index: number;
}

function Card({hasButton, description, title, index, imgSrc}: cardProps): JSX.Element {
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

const cards: cardProps[] = [
    {
        index: 0,
        title: 'Blocto Batch Transaction 🚨',
        hasButton: true,
        imgSrc: 'https://blocto.io/static/batch-tx-2f0a84e48984afd1ef97d1bbf23aafe6.jpg',
        description: 'Ever wished managing your transactions could be quicker, more convenient, and cost-effective?Batch transactions not only save you time but also put some extra crypto back in your pocket. Don\’t miss out on this opportunity to revolutionize your crypto journey—check out this website now and embrace a smarter, more efficient way to navigate the world of digital assets!'
    },

    {
        index: 0,
        title: 'Hackathon Powered by Blocto 💡',
        hasButton: true,
        imgSrc: 'https://blocto.io/static/hookathon-2aac230a32e9eb04cc7294d6044a9c0c.png',
        description: 'Ever wished managing your transactions could be quicker, more convenient, and cost-effective?Batch transactions not only save you time but also put some extra crypto back in your pocket. Don\’t miss out on this opportunity to revolutionize your crypto journey—check out this website now and embrace a smarter, more efficient way to navigate the world of digital assets!'
    },

    {
        index: 0,
        title: 'Blocto Batch Transaction 🚨',
        hasButton: true,
        imgSrc: 'https://blocto.io/static/batch-tx-2f0a84e48984afd1ef97d1bbf23aafe6.jpg',
        description: 'Calling all creative devs and Web3 enthusiasts! Join the Hookathon Powered by Blocto for a chance to win $1000 and present your project at AAvolution House Istanbul! Dive into Web3 innovation, redefine the future, and sign up now! 🏃‍♂️'
    },
]
export function Slider(): JSX.Element {
    return (
        <div className={style.container}>
            <div className="cards">
                {
                    cards.map(({imgSrc, title, description, hasButton, index}, i) => {
                        return <div>
                            <Card 
                                hasButton={hasButton} 
                                imgSrc={imgSrc} 
                                description={description} 
                                title={title} 
                                index={index} 
                            />
                        </div>
                    })
                }
            </div>

            <div className="buttons"></div>
        </div>
    )
}