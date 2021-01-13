import React from 'react';

export function Input(props) {
    return (
        <div className='form-group col-12'>
            <label>
                {props.name.charAt(0).toUpperCase() + props.name.slice(1)} 
            </label>
            <input className='form-control' {...props} />
        </div>
    )
}