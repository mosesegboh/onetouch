import React from 'react';
import './popup.css';

type PopUpProps = {
    trigger:boolean
    setTrigger:(args:boolean)=>void
    children:JSX.Element
}

const PopUp = (props: PopUpProps) =>{

    const {trigger,children,setTrigger} = props
    return (
        (trigger) ? (
            <div 
            className="popup"
            >
                <img 
                alt="CLOSE_BUTTON" 
                className="close-btn" 
                onClick={()=>setTrigger(false)} 
                src="https://www.onetouch.io/wp-content/themes/onetouch/assets/dist/img/icon-close.svg"/>
                <div className="popup-inner">
                    {children}
                </div>
            </div>
        ) : null

    )
   
}

export default PopUp