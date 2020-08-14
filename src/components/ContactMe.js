import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Avatar from '../Avatar.jpeg'
class ContactMe extends Component {
  render() {
    return (
      <section id="contact" style={{ color: '#fff',opacity:'1.4', background: 'url(../images/projects_bg.jpg) no-repeat center / cover' }}>
          <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2 style={{ color: 'white',marginLeft:'150px'}}>Venkatesh Prasad K</h2>
            <img
              src={Avatar}
              alt="avatar"
              style={{height: '250px',width:'200px',marginLeft:'250px'}}
               /><br /><br />
             <em style={{marginLeft: '175px'}}> Wohoo ! You have just landed here to know about me :) </em><br />
             <em style={{marginLeft: '100px'}}> “I’ve just learned a new way of introducing myself and I’m experimenting with it,</em><br />
             <em style={{marginLeft: '245px'}}> Can I try it on you? Ping me On !” </em>
          </Cell>
          <Cell col={6}>
            <h2 style={{ color: 'white',marginLeft:'250px'}}>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List style={{marginLeft:'220px'}}>
                <ListItem>
                  <ListItemContent style={{color:'white',fontSize: '28px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+91) 8667745226
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{color:'white',fontSize: '28px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  (+91) 7092139778
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{color:'white',fontSize: '28px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                  venkateshprasad728@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{color:'white',fontSize: '28px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    venkateshprasad728
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
        </section>
        );
  }
}

export default ContactMe