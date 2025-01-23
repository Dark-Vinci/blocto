import { JSX } from 'react';

import style from './Body.module.scss';

export function Body(): JSX.Element {
    return (
        <div className={style.container}>
            <div className={style.first}>
                <div className={style.first_holder}>
                    <div className={style.button}>
                        <button>Milstone</button>
                    </div>

                    <div className={style.description}>
                        <p>Thrive with Blocto. A Trusted Choice by Millions of Users and Projects, Tailored to Serve Everyone</p>
                    </div>

                    <div className={style.metric}>
                        <div className="users">
                            <p>1.7M</p>
                            <p>unique users</p>
                        </div>

                        <div className="dapp">
                            <p>100+</p>
                            <p>dApps intergrated with Blocto SDK</p>
                        </div>

                        <div className="blocto">
                            <p>370M</p>
                            <p>Blocto points used for universal gas fees</p>
                        </div>

                        <div className={style.last}>
                            <p>{`< 35s`}</p>
                            <p>from user registration to first transaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}