import React from 'react'
import { useDispatch } from 'react-redux'
import { homeActions } from '../store/modules/home'

export default function Reset() {
    const dispatch = useDispatch()
    return (
        <div className='btn' onClick={()=>dispatch(homeActions.reset())}>RESET</div>
    )
}
