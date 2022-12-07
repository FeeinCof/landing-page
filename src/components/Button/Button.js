import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

function Button(props) {
    const { color, children } = props;
    return (
        <>
            <button 
                className={
                    classNames(
                        'btn',
                        color
                    )
                }
            >
                { children }
            </button>
        </>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    context: PropTypes.string
}

export default Button;
