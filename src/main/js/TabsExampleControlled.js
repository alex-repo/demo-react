import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import $ from 'jquery';

import RestButtonExample from "./RestButtonExample";

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

export default class TabsExampleControlled extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 'a', text: "",};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    componentDidMount() {
        $.ajax({
            url: 'text',
            data: {name: 'NLP'}
        }).done(json => {
            this.setState({text: json.name});
        });
    }

    render() {
        return (
            <Tabs value={this.state.value} onChange={this.handleChange}>
                <Tab label="Tab A" value="a">
                    <div>
                        <h2 style={styles.headline}>Controllable Tab A</h2>
                        <p>
                            {this.state.text}
                        </p>
                    </div>
                </Tab>
                <Tab label="Tab B" value="b">
                    <div>
                        <h2 style={styles.headline}>Controllable Tab B</h2>
                        <div>
                            <RestButtonExample/>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}