import { Component } from "react";
import './Education.scss';


class Education extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div class="education group">
            <div class="heading">
                <h2 class="text-center">Education</h2>
            </div>
            <div class="item shadow-lg p-3 mb-7 rounded">
                <div class="row">
                    <div class="col-md-8">
                        <h3 className="bachelor">Software Engineering Bachelor</h3>
                        <h4 className="organization">Castro Carazo University</h4>
                    </div>
                    <div class="col-4"><span class="period"><strong>2019 - 2022</strong></span></div>
                </div>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
            </div>
            <div class="item shadow-lg p-3 mb-7 rounded">
                <div class="row">
                    <div class="col-md-8">
                        <h3 className="bachelor">Highschool</h3>
                        <h4 class="organization">Palmares bilingual highschool</h4>
                    </div>
                    <div class="col-md-4"><span class="period"><strong>2013 - 2018</strong></span></div>
                </div>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
            </div>
        </div>
        );
    }
}
export default Education;