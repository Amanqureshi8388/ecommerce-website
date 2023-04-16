import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({tittle}) => {
    const pagenavigation = {
        with:'100%',
        background:'#F6F8FA',
        padding:'2rem 4rem',

    }
    const aLink = {
        fontSize:'1.3rem',
        fontWeight:'600',
        // color:'linear-gradient(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%)',
        color:'#6254f3'
    }
    const span = {
        display:'inline-block',
        fontSize:'1.3rem',
        fontWeight:'600',
    }
  return (
    <>
    <div style={pagenavigation}>
        <NavLink to='/' style={aLink}> </NavLink> <span style={span}> \ { tittle}</span> 
    </div>
    </>
  )
}

export default PageNavigation