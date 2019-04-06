import React, {PureComponent} from "react";

import picture2 from './drawings/burger.jpg'
import picture3 from './drawings/cat.jpg'
import picture4 from './drawings/coffee.jpg'
import picture5 from './drawings/ginger.jpg'
import picture6 from './drawings/glen.jpg'
import picture7 from './drawings/hornet.jpg'
import picture8 from './drawings/maninred.jpg'

class Image extends PureComponent {
    render() {
        return (
            <div class="container">
			  <h2>Gallery</h2>

			  <p>Click on the images to enlarge them.</p>
			  <div class="row">
			    <div class="col-md-4">
			      <div class="thumbnail">
			      	<a href={picture8} target="_blank">
			          <img src={picture8} alt="Man In Red"/>
			          <div class="caption">
			            <p>Man In Red.</p>
			          </div>
			        </a>
			      </div>
			    </div>
			    <div class="col-md-4">
			      <div class="thumbnail">
			      	<a href={picture4} target="_blank">
			          <img src={picture4} alt="Coffee"/>
			          <div class="caption">
			            <p>Coffee.</p>
			          </div>
			        </a>
			      </div>
			    </div>
			    <div class="col-md-4">
			      <div class="thumbnail">
			     	<a href={picture6} target="_blank">
			          <img src={picture6} alt="Glen"/>
			          <div class="caption">
			            <p>Glen.</p>
			          </div>
			        </a>
			      </div>
			    </div>
			  </div>
			</div>
        );
    }
}
export default Image;
