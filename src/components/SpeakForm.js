import React from 'react';

let textInput = null;

const SpeakForm = (props) =>
    <form className="dialog-form" onSubmit={e => { props.speak(e) }}>
        <input
            type="text"
            ref={(input) => { textInput = input; }}
            className="input-field"
            value={props.currentPhrase}
            onKeyDown={(e) => props.getHistory(e)}
            onChange={e => { props.changePhrase(e.target.value); }}
            autoFocus="true"
        />
        
        <button type="submit" className="btn-submit">Say</button>
        <button type="button" className="btn-clear" onClick={() => { props.clear() }}>Clear</button>
    </form>

export default SpeakForm;