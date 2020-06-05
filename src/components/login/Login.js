import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';

const Login = () => {
    const user = useContext(UserContext);
    return (
        <div className="registration-container">
            <div className="registration">
                <h2 className="registration__heading">Login</h2>
                <form className="registration-form" onSubmit={() => user.setIsAuthenticated(true)}>
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
                    <button className="registration-form__btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
