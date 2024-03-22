import { useState } from "react";

function EventComponent() {
    const handleClick = (event) => {
        console.log("Hello World!");
        console.log(event);
    }
    return (
        <>
            <button onClick={handleClick}>
                Click me
            </button>
            <ShowHideComponent />
        </>);
        
}

function ShowHideComponent() {
    // State to hold the visibility status of the paragraph
    const [isParagraphVisible, setIsParagraphVisible] = useState(true);

    // Function to toggle the visibility status of the paragraph
    // This will show or hide the paragraph depending on the current status.
    const toggleStatus = () => {
        setIsParagraphVisible(!isParagraphVisible);
    }

    return (
        <>
            <h1>Change UI based on click</h1>
            {isParagraphVisible && (
                <p>This paragraph will be shown/hidden on click</p>
            )}
            <button onClick={toggleStatus}>
                {isParagraphVisible ? 'Hide': 'Show' } Paragraph
            </button>
        </>
    );
}

export default EventComponent;