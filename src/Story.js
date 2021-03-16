import React from "react";

const Story = ({storyWords, restartGame}) => {

    return (
        <div>
            <h3>There once was a {storyWords.color} {storyWords.adjective} {storyWords.noun} who loved to {storyWords.verb}.</h3>
            <button onClick={restartGame}>Restart</button>
        </div>
    )
}

export default Story;