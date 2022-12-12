import { useState, useLayoutEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import './Home.css';
import Course2 from '../../components/Course2/Course2';
import Course3 from '../../components/Course3/Course3';
import CourseItem from '../../components/CourseItem/CourseItem';
import CardVideo from '../../components/CardVideo/CardVideo';

import totalCustomerGIf from '../../assets/images/Total_customers_gif.gif';
import courseContentGif from '../../assets/images/Course_content_gif.gif';
import totalCompGif from '../../assets/images/Total_comp_gif.gif';
import collaborationIcon from '../../assets/images/collaboration.svg';
import chevronIcon from '../../assets/images/Chevron.svg';
import FullScreenVideo from '../../components/FullScreenVideo/FullScreenVideo';
import giftIcon from '../../assets/images/gift.png';
import executionIcon from '../../assets/images/Execution.png';
import productIcon from '../../assets/images/Product.png'
const Home = () => {
    const [breakingScript, setbreakingScript] = useState(
        [
            {
                title: 'Introduction to Breaking the Script',
                time: 183,
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                free: {
                    value: true,
                    src: 'https://i.ytimg.com/vi_webp/C2vU1cF-BEA/maxresdefault.webp'
                }
            },
            {
                title: 'Technique 1: Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: false
            },
            {
                title: 'Technique 1: Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: false
            },
            {
                title: 'Technique 1: Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: false
            },
            {
                title: 'Technique 1: Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: false
            }
        ]
    )

    const [executionQuestions, serExecutionQuestions] = useState(
        [
            {
                title: 'Introduction to Breaking the Script',
                time: 183,
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                free: {
                    value: true,
                    src: 'https://i.ytimg.com/vi_webp/C2vU1cF-BEA/maxresdefault.webp'
                }
            },
            {
                title: 'Technique 1: Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: false
            },
            {
                title: 'Technique 1: Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: false
            },
            {
                title: 'Technique 1: Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: false
            },
            {
                title: 'Technique 1: Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: false
            }
        ]
    );
    
    const [productQuestions, serProductQuestions] = useState(
        [
            {
                title: 'Introduction to Breaking the Script',
                time: 183,
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                free: {
                    value: true,
                    src: 'https://i.ytimg.com/vi_webp/C2vU1cF-BEA/maxresdefault.webp'
                }
            },
            {
                title: 'Technique 1: Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: false
            },
            {
                title: 'Technique 1: Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: false
            },
            {
                title: 'Technique 1: Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: false
            },
            {
                title: 'Technique 1: Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: false
            },
            {
                title: 'Technique 1: Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: false
            },
            {
                title: 'Technique 1: Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: false
            }
        ]
    );

    const [isBreakingScriptOpened, setBreakingScriptOpened] = useState(true);
    const [isExecutionOpened, setExecutionOpened] = useState(true);
    const [isProductOpened, setProductOpened] = useState(true);


    const [ isFullScrVideoOpen, setFullScrVideoOpen ] = useState(false);
    const [ srcFullScrVideo, setSrcFullScrVideo ] = useState('https://www.youtube.com/embed/nUaSJJT7Ars')

    const toggleFullScrVideo = (src) => {
        const body = document.querySelector('body');
        setFullScrVideoOpen(!isFullScrVideoOpen);
        if (src) setSrcFullScrVideo(src) 
        else setSrcFullScrVideo('https://www.youtube.com/embed/nUaSJJT7Ars');
        if (!isFullScrVideoOpen) disableBodyScroll(body)
        else enableBodyScroll(body)
    }

    const rightBarRef = useRef();
    const courseRef = useRef();
    useLayoutEffect(() => {
      const onScroll = () => {
        const getBoundingCourseRef = courseRef.current.getBoundingClientRect();
        let rightBarH = rightBarRef.current.getBoundingClientRect().height;
        let courseH = getBoundingCourseRef.height;
        let distance = courseH - rightBarH;
        let disOfCorsToTop = getBoundingCourseRef.top - 85; // Negative to Positive
        disOfCorsToTop *= -1;
        console.log(disOfCorsToTop);
        console.log(distance);
        if (rightBarH > courseH) {
            rightBarRef.current.classList.remove('fixedBarSt1')
            rightBarRef.current.classList.remove('fixedBarSt2')
        }
        else if (disOfCorsToTop >= 0 && disOfCorsToTop < distance) {
            rightBarRef.current.classList.add('fixedBarSt1')
            rightBarRef.current.classList.remove('fixedBarSt2')
        } 
        else if (disOfCorsToTop >= distance) {
            rightBarRef.current.classList.remove('fixedBarSt1')
            rightBarRef.current.classList.add('fixedBarSt2')
        } 
        else {
            rightBarRef.current.classList.remove('fixedBarSt1')
            rightBarRef.current.classList.remove('fixedBarSt2')
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const getCourseTime = (course) => {
        let arr = [];
        course.map((a) => arr.push(a.time));
        let sum = arr.reduce((a, b) => a + b);
        let minutes = Math.floor(sum / 60);
        if (minutes > 60) {
            let hours = Math.floor(sum / 60);
            if (hours > 1) return `${hours} hrs`;
            else return `${hours} hr`;

        } else {
            return `${minutes} mins`;
        }
    }

    return (
        <>
            <div className='Home'>
                {
                    isFullScrVideoOpen && (
                        <FullScreenVideo 
                            src={srcFullScrVideo}
                            title={'Các câu lệnh hay dùng Terminal - Code nhanh by CodersX'}
                            onClick={() => toggleFullScrVideo()}
                        />
                        )
                }
                <div className='container-fluid bg-orange container-fluid-cr2-bg-image'>
                    <div className='container'>
                        <Course2 onClick={() => toggleFullScrVideo()} />
                    </div>
                </div>
                <div className='container-fluid container-fluid-cr3-bg-image'>
                    <div className='container'>
                        <Course3 />
                    </div>
                </div>
                <div className='container-fluid container-fluid-cr3-bg-image'>
                    <div 
                        className='container'
                        style={{
                            marginTop: '3em'
                        }}
                    >
                        <div className='ourMetrics_component'>
                            <h2>Our Metrics</h2>
                            <div>
                                <div>
                                    <img 
                                        style={
                                            {width: '90%'}
                                        } 
                                        src={totalCustomerGIf} 
                                    />
                                    <h2>6,000+</h2>
                                    <span>total customer</span>
                                </div>
                                <div>
                                    <img
                                        style={
                                            {width: '95%'}
                                        } 
                                        src={courseContentGif} 
                                    />
                                    <h2>16 hours</h2>
                                    <span>of HD video lessons</span>
                                </div>
                                <div>
                                    <img 
                                        style={
                                            {width: '90%'}
                                        }
                                        src={totalCompGif} 
                                    />
                                    <h2>38%</h2>
                                    <span>avg. inscrease in TC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid stripe-bg'>
                    <div className='container'>
                        <div className='exploreTheCourse'>
                            <h1>Explore the Course</h1>
                            <div>
                                <div className='exploreTheCourse_left' ref={courseRef}>
                                    <div className='exploreTheCourse_left_component shadow'>
                                        <div 
                                            className='exploreTheCourse_left_heading'
                                            onClick={() => {
                                                setBreakingScriptOpened(!isBreakingScriptOpened);
                                            }}
                                        >
                                            <div>
                                                <img width={'42px'} src={collaborationIcon}/>
                                                <span>Breaking the Script</span>
                                            </div>
                                            <div>
                                                    <span><strong>{breakingScript.length} videos</strong></span>
                                                <div>
                                                    <span>{getCourseTime(breakingScript)}</span>
                                                    <img width={'16px'} src={chevronIcon}/> 
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            (breakingScript && isBreakingScriptOpened) && ( 
                                                <div className='exploreTheCourse_left_body'>
                                                    { breakingScript.map((item, index) =>
                                                        <CourseItem 
                                                            key={index} 
                                                            props={item} 
                                                            onClick={() => toggleFullScrVideo(item.src)}
                                                        />
                                                        )
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className='exploreTheCourse_left_component shadow'>
                                        <div 
                                            className='exploreTheCourse_left_heading'
                                            onClick={() => {
                                                setExecutionOpened(!isExecutionOpened)
                                            }}
                                        >
                                            <div>
                                                <img width={'42px'} src={executionIcon}/>
                                                <span>Execution Questions</span>
                                            </div>
                                            <div>
                                                    <span><strong>{executionQuestions.length} videos</strong></span>
                                                <div>
                                                    <span>{getCourseTime(executionQuestions)}</span>
                                                    <img width={'16px'} src={chevronIcon}/> 
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            (executionQuestions && isExecutionOpened) && ( 
                                                <div className='exploreTheCourse_left_body'>
                                                    { executionQuestions.map((item, index) =>
                                                        <CourseItem 
                                                            key={index} 
                                                            props={item} 
                                                            onClick={() => toggleFullScrVideo(item.src)}
                                                        />
                                                        )
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className='exploreTheCourse_left_component shadow'>
                                        <div 
                                            className='exploreTheCourse_left_heading'
                                            onClick={() => {
                                                setProductOpened(!isProductOpened)
                                            }}
                                        >
                                            <div>
                                                <img width={'42px'} src={productIcon}/>
                                                <span>Product Questions</span>
                                            </div>
                                            <div>
                                                    <span><strong>{productQuestions.length} videos</strong></span>
                                                <div>
                                                    <span>{getCourseTime(productQuestions)}</span>
                                                    <img width={'16px'} src={chevronIcon}/> 
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            (productQuestions && isProductOpened) && ( 
                                                <div className='exploreTheCourse_left_body'>
                                                    { productQuestions.map((item, index) =>
                                                        <CourseItem 
                                                            key={index} 
                                                            props={item} 
                                                            onClick={() => toggleFullScrVideo(item.src)}
                                                        />
                                                        )
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className='exploreTheCourse_right'>
                                    <div ref={rightBarRef}>
                                        <div>
                                            <CardVideo
                                                onClick={() => toggleFullScrVideo()}
                                                op='1'
                                            />
                                        </div>
                                        <div className='border-green'>
                                            <img src={giftIcon} width='48px' height={'46.58px'}/>
                                            <span>&nbsp;</span>
                                            <p className="text t-small">Want to get <strong>free lifetime access</strong> to all 9 Product Alliance courses through your employer? <strong className="bold-text-green">Learn&nbsp;more&nbsp;→</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid stripe-bg'>
                    <div className='container'>
                        footer
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;