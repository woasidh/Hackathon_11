import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './_Popup.css'

function _Popup() {
    return (
        <div style ={{ marginTop : '300px'}}>
            <Popup trigger={<button> Trigger</button>} position="right center"
            contentStyle = {{
                width: '600px',
                height : '400px'
            }}>
                <div className = "popupContainer">
                    <div className="popup__left">

                    </div>
                    <div className="popup__right">
                        
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default _Popup
