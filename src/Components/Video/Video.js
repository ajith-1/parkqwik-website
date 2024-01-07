import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import './Video.css';



export default function Video() {
    const [show, setShow] = useState(false);

    return (
        <div className="videosSection">

            <div
                className="videoItem"
                onClick={() => {
                    setShow(true);
                }}
            >
                <div className="videoThumbnail" >
                    <img className='videoImg'
                        src='/images/customer-image.png' alt='Product'
                    />
                    <img className='button play' src='/images/play.png' alt='Product' />
                </div>
            </div>


            <VideoPopup
                show={show}
                setShow={setShow}
            />
        </div>
    );

}


const VideoPopup = ({ show, setShow }) => {
    const hidePopup = () => {
        setShow(false);

    };
    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    <img className='button close' src='/images/close.png' alt='Product'/>
                </span>
                <ReactPlayer
                    url={`https://youtu.be/5KiF3X17ams?si=OS_zVFiHpLA7DSQj`}
                    controls
                    width="100%"
                    height="100%"
                // playing={true}
                />
            </div>
        </div>
    );
};


