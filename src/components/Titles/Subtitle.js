import React, { Component } from 'react';
import './Subtitle.css';

export default function Subtitle (props) {
  var styles = props.styles || {}
  return (
    <div className="subtitle" style={{styles}}>
        {props.titleText}
    </div>
  )
}
