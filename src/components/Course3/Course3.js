import './Course3.css';
import groupsLogo from '../../assets/images/group_logos-p-500.png';
function Course3(props) {

        return (
            <>
                <div className="Course3">
                    <div className='Course3_left'>
                        <div>
                            <h1>About the Course</h1>
                            <p>Overwhelmed by all the different questions you may get asked during the product management interview?</p>
                            <p>Your time is limited and valuable so no <b>there's no fluff content </b>in our course. We filmed PMs from various top companies answering the <b>85 interview questions </b>below to show you what <b>10-out-of-10 responses look like. </b>All our <b>HD videos</b> are <b>professionally annotated </b>with graphics & notes to aid visual learners and show you exactly what to whiteboard. We explain the nuances of being an exceptional interviewee—from adding strategic framing in your answers to the body language you should exhibit.</p>
                        </div>
                        <div style={{marginTop: '2em'}}>
                            <img width={'80%'} src={groupsLogo}/>
                        </div>
                    </div>
                    <div className='Course3_right'></div>
                </div>
            </>
        )
}

export default Course3;