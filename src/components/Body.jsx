import React from 'react';
import profile from '../images/profile.png';
import html from '../images/html.svg';
import css from '../images/css.png';
import js from '../images/javascript.svg';
import react from '../images/react.png';
import router from '../images/reactrouter.png'
import redux from '../images/redux.svg';
import npm from '../images/npm.png';
import git from '../images/git.png';
import ecommerce from '../images/ecommerce.png'
import pokedex from '../images/pokedex.png'
import quotes from '../images/quotes-app.png'
import rick from '../images/rick-app.png'
import users from '../images/users-crud.png'
import weather from '../images/weather-app.png'
import Typewriter from 'typewriter-effect';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Card from 'react-bootstrap/Card';

const Body = () => {

    const renderHtml = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          HTML5
        </Tooltip>
    );
    const renderCss = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          CSS3
        </Tooltip>
    );
    const renderJs = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          JavaScript
        </Tooltip>
    );
    const renderReact = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          React
        </Tooltip>
    );
    const renderRouter = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          React Router
        </Tooltip>
    );
    const renderRedux = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          React Redux
        </Tooltip>
    );
    const renderNpm = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Npm
        </Tooltip>
    );
    const renderGit = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Git
        </Tooltip>
    );

    return (
        <div>
            <div id='home' className='home-container m-4'>
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
                        <Button variant="success" className='m-4 download-btn' href='https://github.com/JoseTizon/portfolio-2022/raw/main/src/files/Jose%20Tizon%20-%20Front%20end%20Developer%202022%20(en).pdf' target='_blank'><i className="fa-solid fa-file-arrow-down"></i> CV ENG</Button>
                        <Button variant="success" className='m-4 download-btn' href='https://github.com/JoseTizon/portfolio-2022/raw/main/src/files/Jose%20Tizon%20-%20Front%20end%20Developer%202022%20(es).pdf' target='_blank'><i className="fa-solid fa-file-arrow-down"></i> CV ESP</Button>
                    </div>
                </div>
            </div>
            <div id='aboutme' className='aboutme text-light fs-3 bg-success'>
                <h1 className='text-xl-start'>About me</h1>
                <p>I’m a Systems Engineering student who loves to build solutions with code. My interest for creating websites led to my discovery of the vast field of computer programming.</p>
                <p>Since I started learning about web technologies and programming languages, I became passionate about software development. My college education has provided me with strong foundations in concepts like object-oriented programming using C++, C# and Java.</p>
            </div>
            <div id='skills'>
                <h1 className='fs1 text-light m-4'>My Skills</h1>
                <div className='skills-singles'>
                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 250 }} overlay={renderHtml}>
                        <img src={html} alt="html logo" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 250 }} overlay={renderCss}>
                        <img src={css} alt="css logo" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 250 }} overlay={renderJs}>
                        <img src={js} alt="html logo" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 250 }} overlay={renderReact}>
                        <img src={react} alt="css logo" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 250 }} overlay={renderRouter}>
                        <img src={router} alt="css logo" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 250 }} overlay={renderRedux}>
                        <img src={redux} alt="html logo" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 250 }} overlay={renderNpm}>
                        <img src={npm} alt="css logo" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 250 }} overlay={renderGit}>
                        <img src={git} alt="html logo" />
                    </OverlayTrigger>
                </div>
            </div>
            <div id='portfolio' className='bg-dark text-light'>
                <h1 className='fs1 text-light m-4'>My Portfolio</h1>
                <div className='single-cards'>
                    <Card style={{ width: '18rem', margin: '1rem' }}>
                        <Card.Img variant="top" src={quotes} />
                        <Card.Body>
                            <Card.Title>Quotes app</Card.Title>
                            <Card.Text>
                            This web app will display a different motivational quote every time you refresh the page or click in the shuffle button.
                            </Card.Text>
                            <Button variant="primary" className='m-1'>Visit site</Button>
                            <Button variant="primary" className='m-1'>Check repository</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '1rem' }}>
                        <Card.Img variant="top" src={weather} />
                        <Card.Body>
                            <Card.Title>Weather app</Card.Title>
                            <Card.Text>
                            This web app will display your current location weather using a third-party API (location permissions will be requested).
                            </Card.Text>
                            <Button variant="primary" className='m-1'>Visit site</Button>
                            <Button variant="primary" className='m-1'>Check repository</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '1rem' }}>
                        <Card.Img variant="top" src={rick} />
                        <Card.Body>
                            <Card.Title>Rick and Morty Wiki</Card.Title>
                            <Card.Text>
                            This wiki app allows you to visualize all the information from all the show characters based on their dimension id.
                            </Card.Text>
                            <Button variant="primary" className='m-1'>Visit site</Button>
                            <Button variant="primary" className='m-1'>Check repository</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '1rem' }}>
                        <Card.Img variant="top" src={users} />
                        <Card.Body>
                            <Card.Title>Users CRUD</Card.Title>
                            <Card.Text>
                            With this app, you will be able to create, read, update, or delete users information. Data is saved in a third-party public API.
                            </Card.Text>
                            <Button variant="primary" className='m-1'>Visit site</Button>
                            <Button variant="primary" className='m-1'>Check repository</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '1rem' }}>
                        <Card.Img variant="top" src={pokedex} />
                        <Card.Body>
                            <Card.Title>Pokedex</Card.Title>
                            <Card.Text>
                            This is my first app using react redux and react routes. Also, my first interactive pagination implementation.
                            </Card.Text>
                            <Button variant="primary" className='m-1'>Visit site</Button>
                            <Button variant="primary" className='m-1'>Check repository</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '1rem' }}>
                        <Card.Img variant="top" src={ecommerce} />
                        <Card.Body>
                            <Card.Title>E-commerce</Card.Title>
                            <Card.Text>
                            Interactive website that allows you to keep track of your purchase history, linked to an API with all the products information.
                            </Card.Text>
                            <Button variant="primary" className='m-1'>Visit site</Button>
                            <Button variant="primary" className='m-1'>Check repository</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div id='contactme'>
                <h1 className='fs1 text-light m-4'>Contact me</h1>
                <div className='single-cards'>
                    <Card body className='m-2'><i className="fa-solid fa-phone"></i> +(502) 4788 6561</Card>
                    <Card body className='m-2'><i className="fa-solid fa-envelope"></i> Josetizon7@gmail.com</Card>
                </div>
            </div>
        </div>
    );
};

export default Body;