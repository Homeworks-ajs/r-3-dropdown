import React from 'react'
import PropTypes from 'prop-types'
import shortid from "shortid"

function DropdownItem(props) {
  const {menuSet} = props;
  const generateSet = menuSet.map(element => ({
    _id: shortid.generate(),
    value: element
  }));
  return (generateSet.map( (list, index) => <li className={!index ? "active" : ""} key={list._id}><a href="#">{list.value}</a></li>))
}

DropdownItem.propTypes = {
  menuSet: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default DropdownItem
