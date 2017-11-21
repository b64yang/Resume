import React, { PureComponent } from 'react';
import { connect }              from 'react-redux';

import {downloadResume} from '../../Actions/indexActions';
import resume from '../../Public/Documents/ResumeBowen.pdf';

import downloadfile  from 'download-file';

class Introduction extends PureComponent {
    render(){
        //var url = "http://i.imgur.com/G9bDaPH.jpg"
        
        var options = {
            filename: "cat.pdf"
        }
       
        const test = () => {
            downloadfile(resume, options, function(err){
                if (err) throw err
                console.log("meow")
            }) 
        }

        return(
            <section id="introduction">
                <div className="container">
                    <div className="center-text">
                        <h1 className="center-text">Bowen Yang</h1>
                        <div className="header-underline-center"></div>
                    </div>
                    <div className="center-text">
                        <p>Student with proven ability from past successful co-op experience and strong academic background enjoying being challenged and
                             working on projects that require me to work outside my comfort and knowledge set, always have great enthusiasm and commitment to pursue my career in engineering field.   </p>
                    </div>
                    <div  className="center-text pv-20 bold-font fs-20">
                        You can download my resume to learn more about me!
                        <br />
                        Or maybe send me an email to contact!
                    </div>
                    <div className="row">
                        <div className="center-text col-lg-4">
                            <a className="btn btn-resume" target="_blank" rel="noopener noreferrer" href={resume} >View Resume</a>
                        </div>
                        <div className="center-text col-lg-4">
                            <a className="btn btn-resume" target="_blank" rel="noopener noreferrer" href={resume} download>Download Resume</a>
                        </div>
                        <div className="center-text col-lg-4">
                            <a className="btn btn-resume" target="_blank" rel="noopener noreferrer" href="mailto:b64yang@edu.uwaterloo.ca"> Send Email</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        downloadResume: () => { dispatch(downloadResume()) }
    }
}

export default connect (
    null,
    mapDispatchToProps
)(Introduction);