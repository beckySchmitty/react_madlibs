import React, {useState} from "react"
import "./MadLibForm.css"

const MadLibForm = ({createStory}) => {
    const initialState = {
        color: '',
        adjective: '',
        noun:'',
        verb: ''
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createStory({...formData})
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="color"></label>
            <input 
            id="color" 
            type="text" 
            name="color"
            placeholder="color" 
            value={formData.color}
            onChange={handleChange}/>

            <label htmlFor="adjective"></label>
            <input 
            id="adjective" 
            type="text" 
            name="adjective"
            placeholder="adjective" 
            value={formData.adjective}
            onChange={handleChange}/>

            <label htmlFor="noun"></label>
            <input 
            id="noun" 
            type="text" 
            name="noun"
            placeholder="noun" 
            value={formData.noun}
            onChange={handleChange}/>

            
            <label htmlFor="verb"></label>
            <input 
            id="verb" 
            type="text" 
            name="verb"
            placeholder="verb" 
            value={formData.verb}
            onChange={handleChange}/>

            <button>Create Story!</button>
        </form>
    )
}

export default MadLibForm;