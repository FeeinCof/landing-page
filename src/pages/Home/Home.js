import react, { Component } from 'react';
import './Home.css';
import Course2 from '../../components/Course2/Course2';
import Course3 from '../../components/Course3/Course3';
import totalCustomerGIf from '../../assets/images/Total_customers_gif.gif';
import courseContentGif from '../../assets/images/Course_content_gif.gif';
import totalCompGif from '../../assets/images/Total_comp_gif.gif';
class Home extends Component {
    constructor (props) {
        super();
    }

    render() {
        return (
            <>
                <div className='Home'>
                    <div className='container-fluid bg-orange container-fluid-cr2-bg-image'>
                        <div className='container'>
                            <Course2 />
                        </div>
                    </div>
                    <div className='container-fluid container-fluid-cr3-bg-image'>
                        <div className='container'>
                            <Course3 />
                        </div>
                    </div>
                    <div className='container-fluid'>
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
                </div>
            </>
        )
    }
}

export default Home;