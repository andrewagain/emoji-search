import React, { PureComponent } from "react";
import "./Footer.css";

class Footer extends PureComponent {
  render() {
    return (
        <footer className="footer">
          <div className="container">
            <p className="text-muted">Place sticky footer content here.</p>
          </div>
        </footer>
    );
  }
}
export default Footer;
