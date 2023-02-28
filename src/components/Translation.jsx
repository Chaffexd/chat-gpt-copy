import React from 'react';

const Translation = ({ doItButton, setInput, result }) => {
    return(
        <div className="translation-div">
            <h2>Title</h2>
            <textarea 
                className="textarea" 
                cols={50} rows={10} 
                onChange={(e) => setInput(e.target.value)}
            ></textarea>
            <button 
                className="action-button" 
                onClick={doItButton}>Get it
            </button>
            <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
        </div>
    )
};

export default Translation;