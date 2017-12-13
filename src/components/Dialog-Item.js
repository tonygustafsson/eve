import React from 'react';
import WrappyText from 'react-wrappy-text';
import PropTypes from 'prop-types';

const DialogItem = (props) =>
    <div className="dialog-text" key={props.index}>
        <div>
            <span>&#60;{props.time}&#62; {props.sentence}</span><br />
            
            { props.index === 0 && 
                <span>&#60;{props.time}&#62; <WrappyText className="wrappy-text" fps={30}>{props.answer}</WrappyText></span>                                  
            }

            { props.index !== 0 &&
                <span>&#60;{props.time}&#62; <span dangerouslySetInnerHTML={ { __html: props.answer } }></span></span>                                    
            }
        </div>
    </div>

DialogItem.propTypes = {
    index: PropTypes.number,
    sentence: PropTypes.string,
    answer: PropTypes.string,
    time: PropTypes.string,
};

export default DialogItem;