import React from 'react'
import {Tilt} from 'react-tilt'
import Brain from './brain.png';
import './logo.css'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
const Logo=()=>{
    return(
        <div className='ma4 mt0 br2 shadow-2' style={{height:'100px',width:'100px',background: 'no-repeat linear-gradient(to bottom,#9337be, #895d52)'}}>
            <Tilt options={defaultOptions} style={{ height: 100, width: 100 }}>
              <div style={{width:'100px',height:'100px'}}>
                 <img alt='image' src={Brain} width={90} className='pa1'/>
              </div>
            </Tilt>
        </div>
    )
}

export default Logo;