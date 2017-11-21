import React, { Component } from 'react';
import {connect} from 'react-redux';

class SelectedProject extends Component {
    render(){
        if( !this.props.selectedProject) {
            return <div className="description">Click on the project name to view details</div>
        }
        else{
            console.log("hello" + this.props.selectedProject.ProjectName)
            return(
                <div className="selectedElement">
                    <ul>
                        <h5><strong>Project: </strong>{this.props.selectedProject.ProjectCategory} {this.props.selectedProject.ProjectName}</h5>
                        <a href={this.props.selectedProject.ProjectLink} target="_blank" rel="noopener noreferrer"> Link to github or website</a>
                        <p><strong>Project Description: </strong>{this.props.selectedProject.ProjectDescription}</p>
                        <div><strong>Skills Applied: </strong>{this.props.selectedProject.SkillsInvolved}</div>
                    </ul>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        selectedProject: state.selectedProject
    };
}

export default connect(mapStateToProps)(SelectedProject);