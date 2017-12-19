import React from 'react';
import WrappyText from 'react-wrappy-text';
import PropTypes from 'prop-types';

const DialogItem = (props) =>
    <div className="dialog-text" key={props.index}>
        <div>
            <span>&#60;{props.time}&#62; {props.sentence}</span><br />
            
            { props.index === 0 && 
                <span>
                    &#60;{props.time}&#62; <WrappyText className="wrappy-text" fps={30}>{props.answer.text}</WrappyText>
                    <img alt="" src={props.answer.imageUrl} />
                </span>
            }

            { props.index !== 0 &&
                <span>
                    &#60;{props.time}&#62; {props.answer.text}
                    <img alt="" src={props.answer.imageUrl} />
                </span>            
            }
        </div>
    </div>

DialogItem.propTypes = {
    index: PropTypes.number,
    sentence: PropTypes.string,
    answer: PropTypes.object,
    time: PropTypes.string,
};

export default DialogItem;