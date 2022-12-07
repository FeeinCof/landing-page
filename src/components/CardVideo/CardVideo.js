import './CardVideo.css';
import playButtonIcon from '../../assets/images/play-button-arrowhead.png';
function CardVideo(props) {
    return (
        <>
            <div className='CardVideo'>
                <div className='CardHeader'>
                    <img src='https://i.ytimg.com/vi/-uFQzcY7YHc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLChvO21JoM4hf8X9JhWpI81gpAVmA'/>
                    <div className='CardHeader_CoverImg'>
                        <div className='button_play'>
                            <img src={playButtonIcon} />
                        </div>
                        <div>
                            <p><b>Convert dakfasdl fkjamdlskfmadskf; </b></p>
                            <span>Step adf afak afnlf aflkaf aslfalkmfafl akfdladlf aflkalf aflakf adlfk</span>
                        </div>
                    </div>
                </div>
                <div className='CardTitle'>Title</div>
                <div className='CardBody'>Body</div>
            </div>
        </>
    )
}

export default CardVideo;