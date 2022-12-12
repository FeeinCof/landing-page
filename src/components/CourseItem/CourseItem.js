import './CourseItem.css';
import classNames from 'classnames';
import playButtonIcon from '../../assets/images/playButtonCard.svg';
import playIcon from '../../assets/images/playButton.svg';

const CourseItem = (props) => {
    const { onClick } = props;
    const { title, time, free } = props.props;
    let minutes = Math.floor(time/60);
    let seconds = time - minutes * 60;
    if (seconds < 10) seconds = `0${seconds}`; 
    return (
        <>
            <div 
                className={
                    classNames(
                        'CourseItem',
                        { 'CourseItem_free' : free.value }
                    )
                }
                onClick={() => onClick()}
            >
                <div>
                    <div>
                        {
                            free.value && (
                                <div className='courseFree_img'
                                    style={
                                        {
                                            backgroundImage: `url(${free.src})`
                                        }
                                    }
                                >
                                    <img src={playButtonIcon} />
                                </div>
                            )
                        }
                        {
                            !free.value && (
                                <img src={playIcon}/>
                            )
                        }
                        &nbsp;&nbsp;
                        <span>{title}</span>
                    </div>
                    <div>
                        {
                            free && (
                                <span className='f-dx shadow'>Free</span>
                            )
                        }
                        {minutes}:{seconds}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseItem;