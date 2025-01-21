import { JSX } from 'react';

import style from './Header.module.scss';
import { AnimatedButton } from '../../components';

export function Header(): JSX.Element {
    return (
        <div className={style.container}>
            <div className="holder">
                <div className="click">One Click</div>
                <div className="set">All Set</div>
                <div className={style.description}>Where Account Abstraction Meets Convenience: Cheaper Gas, Faster Transaction.</div>
                <div className={style.bots}>
                    <AnimatedButton content={'Download blocto wallet'} backgroundColor={'white'} />

                    <AnimatedButton content={'Build with blocto SDK'} backgroundColor={'blue'} />
                </div>
            </div>
        </div>
    );
}
