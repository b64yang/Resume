import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectProject} from '../../Actions/indexActions';
import SelectedProject from './SelectedProject';


class Projects extends Component {
    render(){
        const titles = this.props.myProjects.map((proj)=>{
            return <li key={proj.id} onClick={() => this.props.selectProject(proj)} className="expLabel left-text">{proj.ProjectCategory}<br /> {proj.ProjectName}</li>
        })
        return(
            <section id="projects">
                <div className="container">
                    <div className="center-text">
                    <h1 className="center-text title"><a href="https://1drv.ms/w/s!AnBRvYIUI_hFj0N3nLmC0wdG1x8u" data-toggle="tooltip" data-placement="bottom" title="View Resume.pdf" target="_blank">Projects</a></h1>
                        <div className="header-underline-center"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 center-text">
                            <ul className="underlineHover">
                                {titles}
                            </ul>
                        </div>
                        <div className="col-lg-9 left-text selectedExperience">
                            <SelectedProject />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
function mapStateToProps(state) {
    return {
        myProjects: state.projects
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectProject: selectProject}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Projects);