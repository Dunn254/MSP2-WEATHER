import React from 'react'
import './Widgets.css'
import { WiHumidity } from 'react-icons/wi'
import { FaWind } from 'react-icons/fa6'

const Widgets = ({ humidity, wind_mph }) => {
    return (
        <div className='widgets'>
            <div className='subWidgets'>
                <div className='subWidgetIcons'>
                    <WiHumidity />
                    <small>humidity</small>
                    <h2>{humidity}%</h2>
                    <FaWind />
                    <small>wind</small>
                    <h2>{wind_mph}mph</h2>
                </div>
            </div>
            <div className='subWidgets'>
                <div className='subWidgetIcons'>
                    <WiHumidity />
                    <small>humidity</small>
                    <h2>{humidity}%</h2>
                    <FaWind />
                    <small>wind</small>
                    <h2>{wind_mph}mph</h2>
                </div>
            </div>
            <div className='subWidgets'>
                <div className='subWidgetIcons'>
                    <WiHumidity />
                    <small>humidity</small>
                    <h2>{humidity}%</h2>
                    <FaWind />
                    <small>wind</small>
                    <h2>{wind_mph}mph</h2>
                </div>
            </div>
        </div>
    )
}

export default Widgets