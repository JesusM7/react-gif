//AlDdOJsjk1OY9RXLk0ecWZhaL4kv3bBz  ------ KEY

import { useState } from "react"
import { AddCategory, GifGrid } from "../components"


export function GifExpertApp() {

    const [categories, setCategories] = useState([""]);
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return; // sin llaves porque solo hace eso

        setCategories([newCategory, ...categories]) // desestructuracion de Arrays
    }

    return (
        <>
            <h2>Gif Expert App</h2>

            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            
                {categories.map( (category) => (

                      <GifGrid 
                      key = {category}
                      category = {category}
                      />
                      
                 ))}
        </>
    )
}