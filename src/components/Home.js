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
        <About
          sharedBasicInfo={this.props.sharedData.sharedBasicInfo}
          resumeBasicInfo={this.props.resumeData.basic_info}/>
      </div>
    );
  }
}

export default Home;
