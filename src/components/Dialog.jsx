import React from 'react';
import PropTypes from 'prop-types';
import DialogItem from './DialogItem';

const Dialog = (props) => (
    <div id="dialog" className="dialog">
        {(typeof props.dialog === 'undefined' || props.dialog.length < 1) && (
            <p>
                &#60;
                {props.loadTime}
                &#62; eve: Hi, what's your name?
            </p>
        )}

        {typeof props.dialog !== 'undefined' &&
            props.dialog.map((said, index) => {
                return (
                    <DialogItem
                        index={index}
                        time={said.time}
                        answer={said.answer}
                        sentence={said.sentence}
                        key={index}
                    />
                );
            })}
    </div>
);

Dialog.propTypes = {
    loadTime: PropTypes.string,
    dialog: PropTypes.array,
};

export default Dialog;
