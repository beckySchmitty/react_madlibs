import React, {useState, useEffect} from "react";
import MadLibForm from "./MadLibForm";
import Story from "./Story"

const MadLibGame = () => {

let storyWordsStart = {
    color: "", 
    adjective: "",
    noun: "", 
    verb: ""
}

const [showStory, setShowStory] = useState(false)
const [showForm, setShowForm] = useState(true)
const [storyWords, setStoryWords] = useState(storyWordsStart)

const createStory = formData => {
    setStoryWords(formData)
    setShowForm(false)
    setShowStory(true)
}

const restartGame = () => {
    setShowStory(false)
    setShowForm(true)
}

    return (
        <div>
            <h1>MadLibs!</h1>
            <div>
            {showForm && <MadLibForm createStory={createStory} />}
            </div>
            <div>
            {showStory && <Story storyWords={storyWords} restartGame={restartGame} />}
            </div>
        </div>
    )
}

export default MadLibGame;