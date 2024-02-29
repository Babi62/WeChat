import React from 'react'

export default function GenderCheckBox() {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={'label gap-2 cursor-pointer'}>
                    <span className='label-tetx'> Male</span>
                    <input type="radio" name="gender" className="radio radio-accent mt-2" />
                </label>
            </div>
            <div className='form-control'>
                <label className={'label gap-2 cursor-pointer'}>
                    <span className='label-tetx ml-4'> Female</span>
                    <input type="radio" name="gender" className="radio radio-secondary mt-2" />
                </label>
            </div>
        </div>
    )
}
