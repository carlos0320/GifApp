import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {


    const [ categories, setCategories ] = useState( defaultCategories );

    

    return (
        <div>
            <h2>GIF App</h2>
            <p>Please enter the name of the Gif you want display</p>
            <AddCategory
                categories={categories}
                setCategories={setCategories}
            />
            <hr></hr>
           

            <ol>
                { categories.map( (category, index) => (
                    <GifGrid
                        key = { category }
                        category = { category }
                    />
                ))}
            </ol>
        </div>
    )
}
