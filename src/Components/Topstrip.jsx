import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleTheme } from '../Redux/storeSlice'

const Topstrip = () => {
  const isDark = useSelector(state => state.isDark)
  const dispatch = useDispatch()
  return (
    <div className='top-strip'>
      <div>
        <i class={`fa-solid fa-sun ${isDark ? 'day' : 'd-none'}`} onClick={() => dispatch(toggleTheme())}></i>
        <i class={`fa-solid fa-moon night ${!isDark ? 'day' : 'd-none'}`} onClick={() => dispatch(toggleTheme())}></i>
        <Link to={"/"}>Register</Link>
        <Link to={"/"}>Login</Link>
      </div>
    </div>
  )
}

export default Topstrip
