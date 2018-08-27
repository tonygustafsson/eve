import React from 'react';
import PropTypes from 'prop-types';

let inputRef = null;

const SpeakForm = props => (
    <form className="dialog-form" onSubmit={props.speak}>
        <input
            type="text"
            ref={input => {
                inputRef = input;
            }}
            className="input-field"
            value={props.currentPhrase}
            onKeyDown={e => props.getHistory(e)}
            onChange={e => {
                props.changePhrase(e.target.value);
            }}
            autoFocus="true"
        />

        <button type="submit" className="btn-submit">
            Say
        </button>
        <button
            type="button"
            className="btn-clear"
            onClick={() => {
                props.clear();
                inputRef.focus();
            }}
        >
            Clear
        </button>
    </form>
);

SpeakForm.propTypes = {
    currentPhrase: PropTypes.string,
    getHistory: PropTypes.func,
    changePhrase: PropTypes.func,
    speak: PropTypes.func,
    clear: PropTypes.func
};

export default SpeakForm;
