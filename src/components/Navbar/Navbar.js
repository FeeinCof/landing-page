import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import branchLogo from '../../assets/images/_branch_logo@1080.png';
import Button from '../Button/Button';

function Navbar(props) {
    return (
        <>
            <div className='Navbar'>
                <div>
                    <div>
                        <img loading="lazy" alt='branch_logo' src={branchLogo} width="100px"/>
                    </div>
                    <div>
                        <Button color='btn-orange'>Enroll now</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;