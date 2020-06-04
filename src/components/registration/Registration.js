import React from 'react';
import { ReactComponent as ChevronIcon } from '../../assets/icons/chevron-down.svg';
import './registration.scss';

const Registration = () => {
    return (
        <div className="registration-container">
            <div className="registration">
                <h2 className="registration__heading">Registration</h2>
                <form className="registration-form">
                    <div className="registration-form__group">
                        <input
                            type="text"
                            className="registration-form__input"
                            id="email-registration"
                            name="registration-email"
                            required
                        />
                        <label htmlFor="email-registration" className="registration-form__label">
                            Login or email
                        </label>
                    </div>
                    <div className="registration-form__group">
                        <input
                            type="password"
                            className="registration-form__input"
                            id="password"
                            name="password"
                            required
                        />
                        <label htmlFor="password" className="registration-form__label">
                            Password
                        </label>
                    </div>
                    <div className="registration-form__group">
                        <select name="role" id="role-select" className="registration-form__select">
                            <option>Admin</option>
                            <option>User</option>
                            <option>Guest</option>
                        </select>
                        <span className="registration-form__icon">
                            <ChevronIcon />
                        </span>
                    </div>
                    <button className="registration-form__btn">Register</button>
                </form>
            </div>
        </div>
    );
};
export default Registration;
