import React from "react";
import axios from 'axios';
import "./Settings.css";
import Navigation from "./Navigation";
import SettingItem from "./SettingItem";


class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            settings: []
        }
    }

    componentDidMount() {
        axios.get('http://jarmodev:3011/settings')
            .then(response => {

                this.setState({settings: response.data.data})
            })
            .catch(error => console.log(error))
    }


    
    render() {
        return (
            <section className="settings">
                <Navigation />
                <section>
                    <ul className="settings">
                        {this.state.settings.map( setting => (
                            <SettingItem key={setting.id} setting={setting} />
                                
                           
                        ))}
                    </ul>
                </section>

            </section>
        )
    }
}

export default Settings;