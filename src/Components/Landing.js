import React, { Component } from 'react';


import Introduction from './landing/Introduction';
import Skills from './landing/Skills';
import Experience from './landing/Experience';
import Projects from './landing/Projects';

export default class Landing extends Component{
    render(){
        return(
            <section>
                <Introduction />
                <Skills />
                <Experience />
                <Projects />
            </section>
        );
    }
}