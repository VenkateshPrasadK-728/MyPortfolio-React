import React, { Component } from 'react';
import { ProgressBar } from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
class Resume extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              Data.education && Data.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        <em style={{ fontSize: '20px' }}>{item.specialization}</em>
                        <span></span> <em className="date">{item.YearOfJoining} {item.YearOfPassing}</em></p>
                      <p className="info">
                        <em style={{ fontSize: '16px' }}>{item.Achievements}</em>
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              Data.work && Data.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        <em style={{ fontSize: '20px' }}>{item.specialization}</em>
                        <span></span><em className="date">{item.MonthOfJoining} {item.YearOfJoining}</em></p>
                      <p className="info">
                        <em style={{ fontSize: '16px' }}>{item.Role}</em>
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                {
                  Data.skills && Data.skills.map((item) => {
                    return (
                      <li>
                        <em style={{ color: 'white' }}>{item.skillname}<ProgressBar style={{ margin: 'auto', height: '7px', width: '100%' }} progress={item.progress} /></em>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume