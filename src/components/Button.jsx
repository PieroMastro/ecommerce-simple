import React from 'react'

const Button = ({ flag, data } = props) => {
    return (
        <button>{flag ? data : "Don't Click"}</button>
    )
}

export default Button