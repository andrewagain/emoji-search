import React, { PureComponent } from "react";
import "./About.css"

class About extends PureComponent {
  render() {
    return (
        <section class="bg-primary text-white mb-0" id="about">
          <div class="container">
            <h2 class="text-center text-uppercase text-white">About</h2>
            <hr class="star-light mb-5"/>
              <div class="row">
                <div class="col-lg-12 ml-auto">
                  <p class="lead">This site contains a selection of drawings drawn by myself over the years. I will be adding to it as I go.
                                    I either draw and colour the pictures straight onto my iPad or I draw them with pencil/paper then trace it on my iPad.</p>
                </div>
              </div>
          </div>
        </section>
    );
  }
}
export default About;
