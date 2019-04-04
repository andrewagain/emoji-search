import React, {PureComponent} from "react";
import "./Gallery.css";
import picture1 from './drawings/amigo.jpg'
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
            <div class="album text-muted">
		      <div class="container">
		        <div class="row">
		          <div class="card">
		            <img src={picture8} alt="Man in Red" />
		            <p class="card-text">Man in Red.</p>
		          </div>
		          <div class="card">
		            <img src={picture1} alt="Amigo"/>
		            <p class="card-text">Amigo.</p>
		          </div>
		          <div class="card">
		            <img src={picture4} alt="Coffee"/>
		            <p class="card-text">Coffee.</p>
		          </div>
		        </div>
		      </div>
		    </div>
        );
    }
}
export default Image;
