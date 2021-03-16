import React, {useState, useEffect} from "react";
import MadLibForm from "./MadLibForm";
import Story from "./Story"

const MadLibGame = () => {

let storyWordsTest = {
    color: "colorWord", 
    adjective: "adjectiveWord",
    noun: "nounWord", 
    verb: "verbWord"
}

const [showStory, setShowStory] = useState(false)
const [showForm, setShowForm] = useState(true)
const [storyWords, setStoryWords] = useState(storyWordsTest)

const createStory = formData => {
    setStoryWords(formData)
    setShowForm(false)
    setShowStory(true)
}

// Story comp shows answers from added to story sentance that is then show when button clicked

    return (
        <div>
            <h1>MadLibs!</h1>
            <div>
            {showForm && <MadLibForm createStory={createStory} />}
            </div>
            <div>
            {showStory && <Story storyWords={storyWords} />}
            </div>
        </div>
    )
}

export default MadLibGame;