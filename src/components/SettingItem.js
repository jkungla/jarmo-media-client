import React from 'react';
import axios from 'axios';

class SettingItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.setting.attributes.value};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        axios.patch(this.props.setting.links.self, {setting: {value: this.state.value}})
            .then(response => {
                console.log(response)
                this.setState({value: response.data.data.attributes.value})
            })
            .catch(error => console.log(error))
        event.preventDefault();
    }

    render() {
        return (
            <li key={this.props.setting.id}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-3 text-right">{this.props.setting.attributes.name}</label>
                        <div className="col-sm-6">
                            <div className="form-group input-group">
                                <input type="text" className="form-control" name={this.props.setting.attributes.name}  value={this.state.value} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Uuenda" />
                </form>
            </li>
        )
    }
}

export default SettingItem;