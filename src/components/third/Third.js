import React from 'react';
import Button from '../button/Button';
import Back from '../../assets/images/back.jpg';
import Right from '../../assets/images/right_side.jpg';
import Left from '../../assets/images/left_side.jpg';
import Front from '../../assets/images/front.jpg';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../assets/icons/bi_arrow-up.svg';
import './third.scss';

const Third = () => {
    const history = useHistory();
    return (
        <div className="content-wborder">
            <div className="top">
                <div className="top__left">
                    <Link to={`/checkup/4?image=${Back}`}>
                        <div className="top__left-image-container">
                            <img src={Back} alt="back side of bus" />
                        </div>
                    </Link>
                    <div className="top__arrow-top">
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                    </div>
                    <div className="top__arrow-bottom">
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                    </div>
                    <div className="top__arrow-left">
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                    </div>
                    <div className="top__arrow-right">
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                    </div>
                </div>
                <div className="top__right">
                    <Link to={`/checkup/4?image=${Right}&side=true`}>
                        <div className="top__right-image-container">
                            <img src={Right} alt="right side of bus" />
                        </div>
                    </Link>
                    <div className="top__arrow-top">
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                    </div>
                    <div className="top__arrow-bottom">
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                    </div>
                    <div className="top__arrow-left">
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                    </div>
                    <div className="top__arrow-right">
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                        <span className="icon-container">
                            <ArrowIcon />
                        </span>
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="middle__left">
                    <Link to={`/checkup/4?image=${Front}`}>
                        <div className="middle__left-image-container">
                            <img src={Front} alt="front side of bus" />
                        </div>
                    </Link>
                </div>
                <div className="middle__right">
                    <Link to={`/checkup/4?image=${Left}&side=true`}>
                        <div className="middle__right-image-container">
                            <img src={Left} alt="left side of bus" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom__left">
                    <Button className="btn" style={{ marginRight: '20px' }} onClick={() => history.goBack()}>Back</Button>
                    <Button className="btn">Confirm</Button>
                </div>
                <div className="bottom__right">
                    <Link to="/checkup/5">
                        <Button className="btn btn-filled">Next</Button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Third;