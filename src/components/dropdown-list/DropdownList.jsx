import React from 'react'
import PropTypes from 'prop-types'
import DropdownItem from '../dropdown-item/DropdownItem'

function DropdownList(props) {
  return <ul data-id="dropdown" className="dropdown">
    <DropdownItem menuSet={props.menuSet}/>
  </ul>
}

DropdownList.propTypes = {
    menuSet: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default DropdownList
