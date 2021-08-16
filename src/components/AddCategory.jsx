import React, { useState } from 'react'
import {PropTypes} from 'prop-types'

const AddCategory = ({setCategories}) => {

    const[category, setCategory] = useState('');

    const handleInputChange = (e) => {
        setCategory(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(category.trim().length>2){
            setCategories(categories => [category, ...categories]);
            setCategory('')
        }

    }

    return (
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    value={category} 
                    type="text" />
            </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory