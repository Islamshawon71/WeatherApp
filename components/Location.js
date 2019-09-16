import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ActivityIndicator
} from "react-native";
import Data from "./Data";

class Location extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      current: [],
      details: false,
      loading: false
    };
  }

  async todoSave() {
    if (this.state.city != "") {
      this.setState({
        loading: true,
        details: false
      });
      const city = await fetch(
        "https://geocode.xyz/&" +
          this.state.city +
          "&auth=516936232871027837963x3541?json=1"
      );
      const cityJson = await city.json();
      const weather = await fetch(
        "https://api.darksky.net/forecast/3be48864eef1505bccb6eb825628232b/" +
          cityJson["latt"] +
          "," +
          cityJson["longt"] +
          ""
      );

      const weatherJson = await weather.json();
      this.setState({
        current: weatherJson["currently"],
        details: true,
        loading: false
      });
    }
  }

  render() {
    return (
      <View style={{ marginTop: 100, paddingLeft: 10, paddingRight: 10 }}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Location"
          onChangeText={city => this.setState({ city })}
        ></TextInput>

        <Button
          title="Search"
          color="#5059A8"
          onPress={this.todoSave.bind(this)}
        ></Button>
        {this.state.loading ? (
          <ActivityIndicator size="large" color="#5059A8" />
        ) : null}
        {this.state.details ? (
          <Data style={styles.dataStyle} array={this.state.current} />
        ) : null}
      </View>
    );
  }
}

export default Location;

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    borderColor: "#5059A8",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  dataStyle: {
    opacity: 0
  }
});
