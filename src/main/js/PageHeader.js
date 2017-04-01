import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';

export default class RestButtonExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: "default"};
    }

    componentDidMount() {
        $.ajax({
            url: 'header',
            data: {header: 'default.header'}
        }).done(json => {
            this.setState({name: json.name});
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
            </div>
        );
    }
}

