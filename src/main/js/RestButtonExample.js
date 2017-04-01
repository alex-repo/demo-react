import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function MyAwesomeReactComponent(props) {
    return (
        <RaisedButton label="NLP INFO" onClick={props.onClick}/>
    );
}

export default class RestButtonExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dummy: "World", isLoggedIn: false};

        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick() {
        console.log("handleLoginClick:" + this.state.isLoggedIn);
        this.setState({isLoggedIn: !this.state.isLoggedIn});
    }

    componentDidMount() {
        $.ajax({
            url: 'dummy',
            data: {name: 'NLP'}
        }).done(json => {
            this.setState({dummy: json.name});
        });
    }

    render() {

        let myButton = <MyAwesomeReactComponent onClick={this.handleLoginClick}/>;

        let nlp = null;
        if (this.state.isLoggedIn) {
            nlp = <div/>;
        } else {
            nlp = <h2>Hello {this.state.dummy}</h2>;
        }

        return (
            <div>
                <h2>Hello {this.state.name}</h2>
                {myButton}
                {nlp}
            </div>
        );
    }
}