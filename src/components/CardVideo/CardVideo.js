import './CardVideo.css';
import Button from '../Button/Button';
import playButtonIcon from '../../assets/images/play-button-arrowhead.png';
import razorPayIcon from '../../assets/images/razorpay-logo.svg';
import shieldIcon from '../../assets/images/shield_icon.svg';
import timeIcon from '../../assets/images/Time (Navy).svg';
import pageIcon from '../../assets/images/PageIcon.svg';
import lifeTimeIcon from '../../assets/images/Lifetime (Navy).svg';
import usDollarIcon from '../../assets/images/us_dollar.svg';

function CardVideo(props) {
    let { onClick } = props;
    return (
        <>
            <div className='CardVideo'>
                <div 
                    className='CardHeader'
                    onClick={() => onClick()}
                >
                    <img src='https://i.ytimg.com/vi_webp/C2vU1cF-BEA/maxresdefault.webp'/>
                    <div className='CardHeader_CoverImg'>
                        <div className='button_play'>
                            <img src={playButtonIcon} />
                        </div>
                        <div className='CardHeaderBody'>
                            <span><b>Convert your PM interviews into offer letters </b></span>
                            <span>Step-by-step walkthrougns to give 10/10 answers to any PM interview question that might be thrown your way.</span>
                        </div>
                    </div>
                </div>
                <div className='CardBody'>
                    <div className='CardTitle'>
                        <div>
                            <div>
                                <p>$430</p>
                            </div>
                            <div>
                                <Button color="btn-orange" large>
                                    Buy now
                                </Button>
                            </div>
                        </div>
                        <div>
                            <a href='/'>Pay in 4 interest-free installments of <b>$122</b> with &nbsp;
                                <img width='80px' src={razorPayIcon}/>
                            </a>
                        </div>
                    </div>
                    < hr/>
                    <div className='CardContent'>
                        <div className='CardItem HeadingItem'>
                            <img src={shieldIcon}/>
                            <span className=''>Created by a team of nearly 2 dozen PMs from Google, Meta, Microsoft, and more</span>
                        </div>
                        <div className='CardItem'>
                            <img width={'24px'} src={timeIcon}/>
                            <span>18 hours of video lessons</span>
                        </div>
                        <div className='CardItem'>
                            <img width={'24px'} src={pageIcon}/>
                            <span>62 pages of interview straregy guides</span>
                        </div>
                        <div className='CardItem'>
                            <img width={'24px'} src={lifeTimeIcon}/>
                            <span>Lifetime access</span>
                        </div>
                        <div className='CardItem'>
                            <img width={'24px'} src={usDollarIcon}/>
                            <span>Tax-deductible expense under the US's continuing education category</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardVideo;