import React from 'react';
import './popup.css';


function PopUp(props: any) {
    return (props.trigger) ? (
        <div className="popup">
            <img alt="CLOSE_BUTTON" className="close-btn" onClick={() => props.setTrigger(false)} src="https://www.onetouch.io/wp-content/themes/onetouch/assets/dist/img/icon-close.svg"></img>
            <div className="popup-inner">
                {props.children}
            </div>
        </div>
    ) : (<div></div>);
}

export default PopUp;
