import './Course2.css';
import Button from '../Button/Button';
import CardVideo from '../CardVideo/CardVideo';
function Course2 (props) {
    return (
        <>
            <div className='course-2'>
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
                        <CardVideo />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course2;