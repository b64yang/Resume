import React, { PureComponent } from 'react';

export default class Header extends PureComponent{
    render(){
        return(
            <section id="nav-container">
          <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                  <img src={require('../Public/images/UW.png')} alt="University of Waterloo" />
                </div>
                <div className="col-sm-6">
                  <div className="center-text">
                    <h4>Bowen Yang</h4>
                    <h4>Computer and Electrical Engineering</h4>
                    <ul className="list-none">
                      <li>5197295732</li>
                      <li>b64yang@edu.uwaterloo.ca</li>
                      <li>bowen970316@hotmail.com</li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-3">
                <h4 style= {{color: '#FF9300'}}>Media</h4>
                <ul className="list-none">
                    <li>
                        facebook:
                        <a href="https://www.facebook.com/bowen.yang.3154" style={{marginLeft : '0px'}}>
                            <img className="roundedImage" src={require('../Public/images/facebook.png')} alt="facebook link" style={{width : '30px', height : '30px'}} />
                        </a>
                    </li>
                    <li>
                        linked-in:
                        <a href="https://www.linkedin.com/feed/?trk=" style={{marginLeft : '0px'}}>
                            <img className="roundedImage" src={require('../Public/images/linkedin.png')} alt="linkedin link" style={{width : '35px', height : '35px'}} />
                        </a>
                    </li>
                    <li>
                        github:
                        <a href="https://www.linkedin.com/feed/?trk=" style={{marginLeft : '0px'}}>
                            <img className="roundedImage" src={require('../Public/images/github.png')} alt="github link" style={{width : '30px', height : '30px'}} />
                        </a>
                    </li>
                </ul>
            </div>
            </div>
          </div>
      </section>
        );
    }
}