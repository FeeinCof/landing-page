import react, { Component } from 'react';
import './Home.css';
import OverViewContainer from '../../components/OverViewContainer/OverViewContainer';
import hackingIcon from '../../assets/images/hacking_icon.svg';
class Home extends Component {
    constructor (props) {
        super();
    }

    render() {
        return (
            <>
                <div className='Home'>
                    <div className='container-fluid bg-orange'>
                        <div className='container overview-component'>
                            <div className='overview-left'>
                                <div className='overview-title'>
                                    <div className='overview-title-image'>
                                        <img src={hackingIcon} />
                                    </div>
                                    <h1>Hacking the Product Management Interview</h1>
                                </div>
                            </div>
                            <div className='overview-right'>
                                <h1>right</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;