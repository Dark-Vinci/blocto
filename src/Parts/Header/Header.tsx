import { JSX } from 'react';

import style from './Header.module.scss';

export function Header(): JSX.Element {
    return (
        <div className={style.container}>
            HEADER
        </div>
    );
}
