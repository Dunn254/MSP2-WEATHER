import React from 'react'
import './Widgets.css'
import { WiHumidity } from 'react-icons/wi'
import { FaWind } from 'react-icons/fa6'
import { TbUvIndex } from "react-icons/tb";
import { TiWeatherShower } from "react-icons/ti";

const Widgets = ({ humidity, wind_mph, uv, precip }) => {
    return (
        <div className='widgets'>
            <div className='subWidgets'>
                <div className='subWidgetIcons'>
                    <h3> <WiHumidity /></h3>
                    <h3>humidity</h3>
                    <h3>{humidity}%</h3>
                </div>
            </div>
            <div className='subWidgets'>
                <div className='subWidgetIcons'>
                    <h3><FaWind /></h3>
                    <h3>wind</h3>
                    <h3>{wind_mph}mph</h3>
                </div>
            </div>
            <div className='subWidgets'>
                <div className='subWidgetIcons'>
                    <h3><TbUvIndex /></h3>
                    <h3>UV Index</h3>
                    <h2>{uv}</h2>
                    {/* <h3><FaWind /></h3>
                    <h3>wind</h3>
                    <h3>{wind_mph}mph</h3> */}
                </div>
            </div>
            <div className='subWidgets'>
                <div className='subWidgetIcons'>
                    <h3><TiWeatherShower /></h3>
                    <h3>Precipitation</h3>
                    <h4>{precip} in</h4>
                </div>
            </div>
            <div className='subWidgets'>
                <div className='subWidgetIcons'>
                    <h3><WiHumidity /></h3>
                    <h3>humidity</h3>
                    <h3>{humidity}%</h3>
                    {/* <h3><FaWind /></h3>
                    <h3>wind</h3>
                    <h3>{wind_mph}mph</h3> */}
                </div>
            </div>
            <div className='subWidgets'>
                <div className='subWidgetIcons'>
                    <h3><WiHumidity /></h3>
                    <h3>humidity</h3>
                    <h3>{humidity}%</h3>
                    {/* <h3><FaWind /></h3>
                    <h3>wind</h3>
                    <h3>{wind_mph}mph</h3> */}
                </div>
            </div>
        </div>
    )
}

export default Widgets