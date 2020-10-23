import React from 'react'
import { useSelector } from 'react-redux'

export default function Total() {
    const clicks = useSelector(state => state.homeReducer.clicks)
    return (
        <div>
            {clicks}
        </div>
    )
}

