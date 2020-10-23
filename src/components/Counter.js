import React from 'react'
import { connect } from 'react-redux'
import { homeActions } from '../store/modules/home'

function Counter({ dispatch, counter }) {
    return (
        <div>
            <div className='btn' onClick={() => dispatch(homeActions.decrement())}>MIN</div>
            <div className='txt'>{counter}</div>
            <div className='btn' onClick={() => dispatch(homeActions.increment())}>PLUS</div>
            <div className='btn' onClick={() => dispatch(homeActions.increment(2))}>PLUS2</div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return state.homeReducer
}

export default connect(mapStateToProps)(Counter)