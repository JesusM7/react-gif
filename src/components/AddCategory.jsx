import { useState } from "react"

export function AddCategory ({onNewCategory}) {
    
    const [inputValue, setInputValue] = useState()

    const onInputChange = ({target}) => { 
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        const inputValueLowerCase = inputValue.trim().toLowerCase();
        onNewCategory( inputValueLowerCase );
        setInputValue("");
        // setCategories(categories => [...categories,inputValue])
    }

    return (
      <form onSubmit={(event) => onSubmit(event)}> 
         <input 
           type="text"
           placeholder="Buscar Gif"
           value={inputValue} 
           onChange={onInputChange}
         />
      </form>
    )
}