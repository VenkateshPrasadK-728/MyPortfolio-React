import React, { Component } from 'react';
class Footer extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              Data.socialLinks && Data.socialLinks.map((item)=>{
                return(
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href={item.url} >
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}

export default Footer