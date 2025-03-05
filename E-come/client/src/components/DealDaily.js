import React, { useState, useEffect, memo } from "react";
import '../styles/DealDaily.scss'
import icons from "../utils/icons";
import { apiGetProducts } from "../apis/product";
import { formatMoney, renderStarFromNumber } from "../utils/helpers";
import { Countdown } from './index';
import moment from 'moment';
import { secondsToHms } from '../utils/helpers'
const { AiFillStar, AiOutlineMenu } = icons

const DealDaily = () => {
    let idInterval
    const [dealDaily, setDealDaily] = useState(null);
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [expireTime, setExpireTime] = useState(false)

    const fetchDealDaily = async () => {
        const response = await apiGetProducts({ limit: 1, page: Math.round(Math.random() * 10), totalRatings: 5 })
        if (response.success) {
            setDealDaily(response.products[0])
            const today = `${moment().format('MM/DD/YYYY')} 5:00:00`
            const seconds = new Date(today).getTime() - new Date().getTime() + 24 * 3600 * 1000
            const number = secondsToHms(seconds)
            setHour(number.h)
            setMinute(number.m)
            setSecond(number.s)
        } else {
            setHour(0)
            setMinute(59)
            setSecond(59)
        }
    }
    // useEffect(() => {
    //     fetchDealDaily()
    // }, [])
    useEffect(() => {
        idInterval && clearInterval(idInterval)
        fetchDealDaily()
    }, [expireTime])
    useEffect(() => {
        idInterval = setInterval(() => {
            if (second > 0) setSecond(prev => prev - 1)
            else {
                if (minute > 0) {
                    setMinute(prev => prev - 1)
                    setSecond(59)
                } else {
                    if (hour > 0) {
                        setHour(prev => prev - 1)
                        setMinute(59)
                        setSecond(59)
                    } else {
                        setExpireTime(!expireTime)
                    }
                }

            }

        }, 1000)
        return () => clearInterval(idInterval)
    }, [second, minute, hour, expireTime])
    return (
        <div className="dealDaily_container">
            <div className="dealDaily_header">
                <span className="dealDaily_icon"><AiFillStar size={20} /></span>
                <span >DEAL DAILY</span>
                <span></span>
            </div>
            <div className="dealDaily_content">
                <img src={dealDaily?.image[0] || ''} alt="" className="dealDaily_image"></img>
                <span className="dealDaily_title line-clamp-1">{dealDaily?.title}</span>
                <span className="dealDaily_star">{renderStarFromNumber(dealDaily?.totalRatings, 20)?.map((el,index)=>(
                    <span key={index}>{el}</span>
                ))}</span>
                <span>{`${formatMoney(dealDaily?.price)} VNĐ`}</span>
            </div>
            <div className="dealDaily_button_group">
                <div className="dealDaily_countdown">
                    <Countdown unit={'Hours'} number={hour} />
                    <Countdown unit={'Minutes'} number={minute} />
                    <Countdown unit={'Seconds'} number={second} />
                </div>
                <button type="button" className="dealDaily_button">
                    <AiOutlineMenu />
                    <span>Options</span>
                </button>
            </div>

        </div>
    )
}
export default memo(DealDaily);