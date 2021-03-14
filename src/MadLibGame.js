import React, {useState, useEffect} from "react";
import MadLibForm from "./MadLibForm";
import Story from "./Story"

const MadLibGame = () => {
// state 

// createStory func connected to form

// Story comp shows answers from added to story sentance that is then show when button clicked

    return (
        <div>
            <h1>HELLO</h1>
            {/* add hide/show property to form */}
            <div><MadLibForm /></div>
            {/* also add hide/show */}
            <div><Story /></div>
        </div>
    )
}

export default MadLibGame;