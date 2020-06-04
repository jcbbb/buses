import React from 'react';
import Button from '../button/Button';
import { useHistory, Link } from 'react-router-dom';

const Fifth = () => {
    const history = useHistory();
    return (
        <div class="content">
            <div class="question">
                <div class="question__block">
                    <p>Lorem ipsum dolor sit amet dolor sit dolor sit?</p>
                </div>
                <div class="answer">
                    <Button class="btn">Yes</Button>
                    <Button class="btn" style={{ marginLeft: '20px' }}>No</Button>
                </div>
            </div>
            <div class="question">
                <div class="question__block">
                    <p>Lorem ipsum dolor sit amet dolor sit dolor sit?</p>
                </div>
                <div class="answer">
                    <Button class="btn">Yes</Button>
                    <Button class="btn" style={{ marginLeft: '20px' }}>No</Button>
                </div>
            </div>
            <div class="bottom-actions">
                <Button class="btn" onClick={() => history.goBack()}>Go back</Button>
                <Link to="/checkup/6">
                    <Button class="btn btn-filled">Confirm</Button>
                </Link>
            </div>
        </div>
    )
}

export default Fifth;