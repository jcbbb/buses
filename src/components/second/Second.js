import React from 'react';
import Button from '../button/Button';
import { useHistory, Link } from 'react-router-dom';
import './second.scss';

const Second = () => {
    const history = useHistory();
    return (
        <div className="content">
            <div className="question">
                <div className="question__block">
                    <p>Lorem ipsum dolor sit amet dolor sit dolor sit?</p>
                </div>
                <div className="answer">
                    <Button className="btn">Yes</Button>
                    <Button className="btn" style={{ marginLeft: '20px' }}>No</Button>
                </div>
            </div>
            <div className="bottom-actions">
                <Button className="btn" onClick={() => history.goBack()}>Go back</Button>
                <Link to="/checkup/3">
                    <Button className="btn btn-filled">Confirm</Button>
                </Link>
            </div>
        </div>
    )
}

export default Second;