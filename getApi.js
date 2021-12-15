import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

        };
    }

    // componentDidMount() {
    //   this.getData();
    // }

    getData = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((json) => this.setState({ data: json }, () => console.log(json)))
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.getData()} >
                <Text> App </Text>
            </TouchableOpacity>
        );
    }
}
