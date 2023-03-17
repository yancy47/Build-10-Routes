import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.blouse.style}</strong> {props.blouse.availableForPurchase ? 'is it available for purchase' : 'is NOT available for purchase'}</p>
            <p>Its color is <span style={{ color: props.blouse.color }}>{props.blouse.color}</span></p>
            <a href="/blouses">Back</a>
            {/* <button></button> */}
        </div>
    )
}

export default Show;

//      <div style={{border}}>