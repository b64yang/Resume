import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectCompany} from '../../Actions/indexActions';
import SelectedExperience from './SelectedExperience';

class Experience extends Component {
    render(){
        const titles = this.props.myExperience.map((ex)=>{
            return <li key={ex.id} onClick={() => this.props.selectCompany(ex)} className="expLabel left-text">{ex.Company}<br /> {ex.Title} </li>
        })
        return(
            <section id="experience">
                <div className="container">
                    <div className="center-text">
                    <h1 className="center-text title"><a href="https://1drv.ms/w/s!AnBRvYIUI_hFj0N3nLmC0wdG1x8u" data-toggle="tooltip" data-placement="bottom" title="View Resume.pdf" target="_blank">Experience</a></h1>
                        <div className="header-underline-center"></div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-3 left-text">
                            <ul className="underlineHover">
                                {titles}
                            </ul>
                            <div className="right-text">
                                <img src={ this.props.selectedExperience ? require('../../Public/images/' + this.props.selectedExperience.Logo) : require('../../Public/images/React.png')} style={{width: '150px', height: '150px', margin: '10px'}}/>
                            </div>
                        </div>
                        <div className="col-lg-8 left-text selectedExperience">
                            <SelectedExperience />
                        </div>
                        {/* <div className="col-lg-1">
                            <img src={ this.props.selectedExperience ? require('../../Public/images/' + this.props.selectedExperience.Logo) : require('../../Public/images/React.png')} style={{width: '150px', height: '150px'}}/>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        myExperience: state.experience,
        selectedExperience: state.selectedExperience
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectCompany: selectCompany}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Experience);