import React, { useEffect, useState } from "react";
import "./ProgressBar.css"

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <div className="bar">
                <div style={{ 'backgroundColor': 'blue', 'width': props.progress + '%' }}>
                </div>
                <div style={{ 'backgroundColor': '#d3d3d3', 'width': (100 - props.progress) + '%' }}>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;