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
            <div className="education group">
            <div className="heading">
                <h2 className="text-center"><strong>Education</strong></h2>
            </div>
            <div className="item shadow-lg p-3 mb-7 rounded">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="bachelor">Software Engineering</h3>
                        <h4 className="organization">Castro Carazo University</h4>
                    </div>
                    <div className="date col-md-4"><span class="period"><strong>2019 - 2022</strong></span></div>
                </div>
                <p className="text-muted">Palmares, Alajuela, Costa Rica</p>
            </div>
            <div className="item2 shadow-lg p-3 mb-7 rounded">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="bachelor">High school</h3>
                        <h4 className="organization">Palmares bilingual high school</h4>
                    </div>
                    <div className="date col-md-4"><span class="period"><strong>2014 - 2018</strong></span></div>
                </div>
                <p className="text-muted">Palmares, Alajuela, Costa Rica</p>
            </div>
        </div>
        );
    }
}
export default Education;