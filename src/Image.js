import React, {PureComponent} from "react";
import "./Image.css";
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
            <div className="container">
                <div className="images">
                    <img src={picture8} alt="Amigo"/>
                </div>
            </div>
        );
    }
}
export default Image;
