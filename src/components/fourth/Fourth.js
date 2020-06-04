import React from 'react';
import Button from '../button/Button';
import { ReactComponent as CameraIcon } from '../../assets/icons/camera.svg'
import { ReactComponent as ArrowIcon } from '../../assets/icons/bi_arrow-up.svg';
import { useLocation, useHistory } from 'react-router-dom';
import './fourth.scss';

const Fourth = () => {
    const location = useLocation();
    const history = useHistory();
    const params = new URLSearchParams(location.search);
    return (
        <div className="content-4" style={params.get('side') && { width: '1000px' }}>
            <div className="left">
                <div className="left__bus" style={params.get('side') && { flexDirection: 'column' }}>
                    <div className="left__bus-image-container">
                        <img src={params.get('image')} alt="front side of bus" />
                    </div>
                    {params.get('side') ? (
                        <div className="side-arrows">
                            <div className="side-arrows__batch">
                                <span className="icon-container">
                                    <ArrowIcon />
                                </span>
                                <span className="icon-container">
                                    <ArrowIcon />
                                </span>
                            </div>
                            <div className="side-arrows__batch">
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
                            <div className="side-arrows__batch">
                                <span className="icon-container">
                                    <ArrowIcon />
                                </span>
                                <span className="icon-container">
                                    <ArrowIcon />
                                </span>
                            </div>
                        </div>
                    ) : (
                            <>
                                <div className="left__arrow-top">
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
                                <div className="left__arrow-bottom">
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
                                <div className="left__arrow-left">
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
                                <div className="left__arrow-right">
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
                            </>
                        )}

                </div>

                <div className="left__actions">
                    <Button className="btn" style={{ marginRight: '20px' }} onClick={() => history.goBack()}>Back</Button>
                    <Button className="btn btn-filled" onClick={() => history.goBack()}>Confirm</Button>
                </div>
            </div >

            <div className="right">
                <div className="right__top-bar">
                    <CameraIcon />
                </div>
                <div className="right__image-container">
                    <img src={params.get('image')} alt="front side of bus" />
                </div>
                <textarea placeholder="Comment" className="right__comment-section" name="comment" cols="30" rows="8"></textarea>
            </div>
        </div >
    )
}

export default Fourth;