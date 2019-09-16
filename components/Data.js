import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

class Data extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
  }

  render() {
    const data = this.props.array;
    return (
      <View style={{ margin: 10 }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://darksky.net/images/weather-icons/" +
              this.props.array.icon +
              ".png"
          }}
        />

        <Text style={styles.items}>Summary : {this.props.array.summary}</Text>
        <Text style={styles.items}>
          Temperature : {this.props.array.apparentTemperature}
        </Text>
        <Text style={styles.items}>Humidity : {this.props.array.humidity}</Text>
        <Text style={styles.items}>Pressure : {this.props.array.pressure}</Text>
        <Text style={styles.items}>
          WindSpeed : {this.props.array.windSpeed}
        </Text>
        <Text style={styles.items}>
          Temperature : {this.props.array.apparentTemperature}
        </Text>
      </View>
    );
  }
}

export default Data;

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    borderColor: "#5059A8",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  items: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
    paddingBottom: 5,
    paddingTop: 5
  }
});
