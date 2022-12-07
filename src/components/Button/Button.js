import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';
import arrowdownIcon from '../../assets/images/arrowdown.svg';
function Button(props) {
    const { color, children, arrowdown } = props;
    return (
        <>
            <button 
                className={
                    classNames(
                        'btn',
                        color,
                        {
                            'text-lg': arrowdown
                        }
                    )
                }
            >
                { children }
                &nbsp;
                { arrowdown && (
                    <img className='arrowdown' src={arrowdownIcon} />
                ) }
            </button>
        </>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    context: PropTypes.string
}

export default Button;
