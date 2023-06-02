import React, { Component } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import About from "./About";
import { AccordionButton } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
         <About
          sharedBasicInfo={this.props.sharedData.basic_info}
          resumeBasicInfo={this.props.resumeData.basic_info}/>
        <Projects
          resumeProjects={this.props.resumeData.projects}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.props.sharedData.skills}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.props.resumeData.experience}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
      </div>
    );
  }
}

export default Home;
