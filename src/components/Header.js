import React, { Component } from 'react';
class Header extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <React.Fragment>

        <header id="home">
          <nav id="nav-wrap">
            <ul id="nav" className="nav">
               <li className="current"><a className="" rel="noopener noreferrer" href="#home">Home</a></li>
              <li className="current"><a className="smoothscroll" rel="noopener noreferrer" href="#about">About</a></li>
              <li className="current"><a className="smoothscroll" rel="noopener noreferrer" href="#resume">Resume</a></li>
              <li className="current"><a className="smoothscroll" rel="noopener noreferrer" href="#projects">Projects</a></li>
              <li className="current"><a className="smoothscroll" rel="noopener noreferrer"href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm {Data.name}</h1>
              <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}><em style={{ fontSize: '20px' }}>{Data.roleDescription}</em>
              </h3>
              <hr />
              <ul className="social">
                {
                  Data.socialLinks && Data.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} rel="noopener noreferrer" target="_blank"><i className={item.className}></i></a>
                      </li>
                    )
                  }
                  )
                }
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>

        </header>
      </React.Fragment>
    );
  }
}

export default Header