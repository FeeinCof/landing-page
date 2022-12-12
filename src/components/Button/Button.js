import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';
import arrowdownIcon from '../../assets/images/arrowdown.svg';
function Button(props) {
    const { color, children, arrowdown, large, className } = props;
    return (
        <>
            <button 
                className={
                    classNames(
                        'btn',
                        color, 
                        {
                            'text-lg': arrowdown
                        },
                        {
                            'btn-lg': large
                        },
                        className
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
