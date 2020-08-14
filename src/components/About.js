import React, { Component } from 'react';
class About extends Component {
   render() {
      let Data = this.props.Data;
      return (
         <section id="about" style={{opacity:'1.4', background: 'url(../images/about-bg.jpg) no-repeat center / cover' }}>
            <div className="row">
               <div className="three columns">
                  <img className="profile" src="images/profilepic.png" alt="" style={{position:'absolute',marginLeft:'-100px',marginTop:'30px'}}/>
               </div>
               <div className="nine columns main-col">
                  <h3 >About Me</h3>
                  <p>
                     <em style={{ fontSize: '16px',color:'white' }}>{Data.aboutme}</em><br/>
                     <em style={{ fontSize: '16px',color:'white',marginLeft:'100px' }}>{Data.bio}</em><br/>
                  </p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h3>Address</h3>
                        <p className="address" style={{ fontSize: '16px',color:'white' }}>
                           <em><span>Venkatesh Prasad K</span></em>
                           <br></br>
                           <span>
                              <em>{Data.address}</em>
                           </span>
                           <br></br>
                           <em>{Data.phone}</em>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default About