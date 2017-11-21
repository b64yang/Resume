import React, { PureComponent } from 'react';

import {skills}               from '../skills.json';


export default class Skills extends PureComponent {
    render(){
        const skillArray = skills.experience.map((skill)=>{
            return <div className="row pv-20"><div className="col-sm-3 bold-font right-text">{skill.title}</div><div className="col-sm-9">{skill.content}</div></div>
        })
        return(
            <section id="skills">
                <div className="container">
                    <div className="center-text title">
                        <h1 className="center-text"><a href="https://1drv.ms/w/s!AnBRvYIUI_hFj0N3nLmC0wdG1x8u" data-toggle="tooltip" data-placement="bottom" title="View Resume.pdf" target="_blank">My Skills</a></h1>
                        <div className="header-underline-center"></div>
                    </div>
                    {skillArray}
                </div>
            </section>
        )
    }
} 