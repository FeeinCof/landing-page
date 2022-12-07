import react, { Component } from 'react';
import './Home.css';
import Course2 from '../../components/Course2/Course2';
class Home extends Component {
    constructor (props) {
        super();
    }

    render() {
        return (
            <>
                <div className='Home'>
                    <div className='container-fluid bg-orange container-fluid-bg-image'>
                        <div className='container'>
                            <Course2 />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;