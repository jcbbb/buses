import React from 'react';
import Button from '../button/Button';
import { useHistory } from 'react-router-dom';

import './sixth.scss';

const Sixth = () => {
    const history = useHistory();

    return (
        <div class="content">
            <div class="system-output">
                <p class="system-output__text">System output</p>
            </div>

            <div class="inputs">
                <div class="inputs__group">
                    <input type="text" class="inputs__input" id="input-1" name="input-1" required />
                    <label for="input-1" class="inputs__label">Input placeholder</label>
                </div>

                <div class="inputs__group">
                    <input type="text" class="inputs__input" id="input-2" name="input-2" required />
                    <label for="input-2" class="inputs__label">input placeholder</label>
                </div>
            </div>
            <Button style={{ alignSelf: 'center' }} class="btn btn-filled" onClick={() => history.goBack()}>Go back</Button>
        </div>

    )
}

export default Sixth;