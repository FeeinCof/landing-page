import React, { Component } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import './Course2.css';
import Button from '../Button/Button';
import CardVideo from '../CardVideo/CardVideo';
import FullScreenVideo from '../FullScreenVideo/FullScreenVideo';
class Course2 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isFullScrVideoOpen: false
        }
    }

    toggleFullScrVideo() {
        let { isFullScrVideoOpen } = this.state;
        const body = document.querySelector('body');
        this.setState({
            isFullScrVideoOpen: !isFullScrVideoOpen
        });

        if (!isFullScrVideoOpen) disableBodyScroll(body)
        else enableBodyScroll(body)
    }

    render() {
        let { isFullScrVideoOpen } = this.state;
        return (
            <>
                <div className='course-2'>
                    {
                        isFullScrVideoOpen && (
                            <FullScreenVideo 
                                src={'https://www.youtube.com/embed/cbnM_elWYgs'}
                                title={'Các câu lệnh hay dùng Terminal - Code nhanh by CodersX'}
                                onClick={() => this.toggleFullScrVideo()}
                            />
                        )
                    }
                    <div className='course-content'>
                        <div className='course-left'>
                            <div className='course-content-header'>
                                <div>
                                    <div className='course-icon'></div>
                                </div>
                                <div className='course-h1'>
                                    <h1 className='course2-context'>Hacking the Product Management Inteview</h1>
                                </div>
                            </div>
                            <div>
                                <span className='course2-context'>This course will teach you how to answer ANY interview <br/> question thrown your way</span>
                            </div>
                                <br />
                                <br />
                                <br />
                            <div>
                                <Button color='btn-orange-light' arrowdown={true}>Explore the course</Button>
                            </div>
                        </div>
                            <br/>
                            <br/>
                            <br/>
                        <div className='course-right'>
                            <CardVideo
                                onClick={() => this.toggleFullScrVideo()}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Course2;