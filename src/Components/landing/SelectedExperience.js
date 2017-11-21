import React, { Component } from 'react';
import {connect} from 'react-redux';

class SelectedExperience extends Component {
    render(){
        if( !this.props.selectedExperience) {
            return <div className="description">Click on the Company name on the left to view the experience</div>
        }
        else{
            console.log("hello" + this.props.selectedExperience.CompanyLink)
            return(
                <div className="selectedElement">
                    <ul className="col-sm-9">
                        <h5 className="color-black">
                            <a href={this.props.selectedExperience.CompanyLink} target="_blank">
                                <strong>
                                    {this.props.selectedExperience.Company} {this.props.selectedExperience.Location}
                                </strong>(click to view company site)
                            </a>
                        </h5>
                        <div><strong>Time: </strong>{this.props.selectedExperience.Time}</div>
                        <p><strong>Company Description: </strong>{this.props.selectedExperience.CompanyDescription}</p>
                        <div><strong>Job Title: </strong>{this.props.selectedExperience.Title}</div>
                        <p><strong>Job Description: </strong>{this.props.selectedExperience.WorkContent}</p>
                    </ul>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        selectedExperience: state.selectedExperience
    };
}

export default connect(mapStateToProps)(SelectedExperience);