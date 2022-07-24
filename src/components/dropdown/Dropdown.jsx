import React, { useState } from 'react'
import DropdownList from '../dropdown-list/DropdownList'

function Dropdown() {
  const [status, setStatus] = useState("closed");

  const menuSet = [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out"
  ]

  const toggleOpen = (evt) => {
    setStatus(prev => prev == "closed" ? "open" : "closed")
  }

  return (
    <div data-id="wrapper" className={"dropdown-wrapper " + status}>
      <button data-id="toggle" className="btn" onClick={toggleOpen}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList menuSet={menuSet}/>
    </div>
  )
}

export default Dropdown
