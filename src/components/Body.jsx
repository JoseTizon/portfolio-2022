import React from 'react';
import profile from '../images/profile.png';
import Typewriter from 'typewriter-effect';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import fileDownload from 'js-file-download'

const Body = () => {

    const handleClick = (url, filename) => {
        axios.get(url, {
          responseType: 'blob',
        })
        .then((res) => {
          fileDownload(res.data, filename)
        })
    }

    return (
        <div className='m-4'>
            <div id='aboutme' className='aboutme-container'>
            <div>
                <img src={profile} alt="profile picture" className='profile-pic' /></div>
            <div className='text-light fs-2'>
                <h1 className='fs-1'>I'm Jose Tizon</h1>
                <Typewriter options={{
                    autoStart: true,
                    loop: true,
                    strings: [
                        'Front end Developer',
                        'Web Developer'
                    ]
                }} />
                <div className='div-line'></div>
                <p className='fs-3 mt-5'>Junior front-end developer, with solid knowledge in different languages to develop web pages from scratch with the most recent technologies.</p>
                <div className='buttons-container'>
                    <Button variant="success" className='m-4' onClick={() => {() => handleClick('../files/Jose Tizon - Front end Developer 2022 (en).pdf', 'sample')}}><i className="fa-solid fa-file-arrow-down"></i> CV ENG</Button>
                    <Button variant="success" className='m-4' href='../files/Jose Tizon - Front end Developer 2022 (es).pdf'><i className="fa-solid fa-file-arrow-down"></i> CV ESP</Button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Body;