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
                    <h3>humidity</h3>
                    <h3>{humidity}%</h3>
                    <FaWind />
                    <h3>wind</h3>
                    <h3>{wind_mph}mph</h3>
                </div>
            </div>
            <div className='subWidgets'>
                <div className='subWidgetIcons'>
                    <WiHumidity />
                    <h3>humidity</h3>
                    <h3>{humidity}%</h3>
                    <FaWind />
                    <h3>wind</h3>
                    <h3>{wind_mph}mph</h3>
                </div>
            </div>
            <div className='subWidgets'>
                <div className='subWidgetIcons'>
                    <WiHumidity />
                    <h3>humidity</h3>
                    <h3>{humidity}%</h3>
                    <FaWind />
                    <h3>wind</h3>
                    <h3>{wind_mph}mph</h3>
                </div>
            </div>
        </div>
    )
}

export default Widgets