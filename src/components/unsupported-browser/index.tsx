import OuterWildsLogo from 'src/assets/Misc/Outerwilds-Logo_web.png';
import React from 'react';
import css from './style.module.css';

const MESSAGE_IT = 'UNSUPPORTED_BROWSER_MESSAGE' as const;

export const UnsupportedBrowser: React.FC = () => {
    return (
        <div className={css['page']}>
            <img alt="logo" className={css['logo']} src={OuterWildsLogo} />
            <div className={css['text']}>{MESSAGE_IT}</div>
        </div>
    );
};
