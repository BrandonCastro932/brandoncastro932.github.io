import { Component } from "react";
import './Skills.scss';
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

class Skills extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="wasd row">
                
                <div className="contact col-md-6 col-md-offset-3 shadow-lg p-2 mb-5 rounded">
                    <h2 className="title">Contact</h2>
                    <div className="contactdata">
                        <h4><FontAwesomeIcon
                        icon={faEnvelope}
                        className="icon-contact"
                        size="1x"
                      ></FontAwesomeIcon> Email: brandoncastro12331@gmail.com</h4>
                      
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Skills;