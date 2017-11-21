import React, { PureComponent } from 'react';

export default class Footer extends PureComponent{
    render(){
        return(
            <section id="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h4>Bowen Yang</h4>
                            <ul className="list-none">
                                <li>University Of Waterloo</li>
                                <li>Electrical and Computer Engineering </li>
                                <li>2A term</li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <h4>Contact</h4>
                            <ul className="list-none">
                                <li>5197295732</li>
                                <li>b64yang@edu.uwaterloo.ca</li>
                                <li>bowen970316@hotmail.com</li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <h4>Media</h4>
                            <ul className="list-none">
                                <li>
                                    facebook:
                                    <a href="https://www.facebook.com/bowen.yang.3154">
                                        <img className="roundedImage" src={require('../Public/images/facebook.png')} alt="facebook link" />
                                    </a>
                                </li>
                                <li>
                                    linked-in:
                                    <a href="https://www.linkedin.com/feed/?trk=">
                                        <img className="roundedImage" src={require('../Public/images/linkedin.png')} alt="linkedin link" />
                                    </a>
                                </li>
                                <li>
                                    github:
                                    <a href="https://www.linkedin.com/feed/?trk=" style={{marginLeft : '0px'}}>
                                        <img className="roundedImage" src={require('../Public/images/github.png')} alt="github link" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}