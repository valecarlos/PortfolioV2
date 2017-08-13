import React, { Component } from 'react';
import './Titles.css';

export default function Titles (props) {
  var styles = props.styles || {}
  return (
    <div className="title" style={{styles}}>
        {props.titleText}
    </div>
  )
}
