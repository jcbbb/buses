import React from 'react';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import './start.scss';

const Start = () => {
    return (
        <div className="content">
            <div className="start">
                <input className="start__input" type="text" placeholder="Input" />
                <div className="start__output">Result from DB</div>
            </div>
            <Link to="/checkup/2" className="start-confirm">
                <Button className="btn btn-filled">Confirm</Button>
            </Link>
        </div>
    )

}

export default Start;