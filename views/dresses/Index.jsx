import React from 'react'

function Index(props) {
    // can't use hooks or state
    // can't use event listeners in the same way 
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.dresses.map((dress, index) =>
                    <li>
                        <a href={`/dresses/${index}`}><strong>{dress.style}</strong></a>
                    </li>
                    )}
            </ul>
        </div>
    )
}

export default Index;

// <a href will turn into links 