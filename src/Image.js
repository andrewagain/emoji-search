import React, {PureComponent} from "react";
import "./Image.css";

class Image extends PureComponent {
    render() {
        return (
            <section class="jumbotron text-center">
		      <div class="container">
		        <h1 class="jumbotron-heading">Drawings</h1>
		        <p class="lead text-muted">Here is a collection of my drawings.</p>
		        <p>
		          <a href="#" class="btn btn-primary">Button 1</a>
		          <a href="#" class="btn btn-secondary">Button 2</a>
		        </p>
		      </div>
		    </section>
        );
    }
}
export default Image;
