import React, { Component } from 'react';
import { View, StatusBar, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: []
    };
  }

  componentDidMount = async () => {
    const headers = {
      "Content-type": "application/json; charset=UTF-8",
      Accept: 'application/json',
      'Authorization': 'Bearer 2604e7a7-7200-3fd1-914b-41cf9f540696'
    }
    console.log(headers)
    await axios.get("https://api.cnptia.embrapa.br/agritec/v1/culturas", {
      headers: headers

    }).then(response => {
      this.setState({ apiData: Object.values(response.data) })
      console.log(response.data[0].id)
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <FlatList
        style={{marginTop: 30}}
          data={this.state.apiData}
          renderItem={
            ({ item }) => (
              <View>
                <Text style={styles.fontStyle}>{item[0].cultura}</Text>
                <Text style={styles.fontStyle}>{item[1].cultura}</Text>
                <Text style={styles.fontStyle}>{item[2].cultura}</Text>
                <Text style={styles.fontStyle}>{item[3].cultura}</Text>
                <Text style={styles.fontStyle}>{item[4].cultura}</Text>
                <Text style={styles.fontStyle}>{item[5].cultura}</Text>
                <Text style={styles.fontStyle}>{item[6].cultura}</Text>
                <Text style={styles.fontStyle}>{item[7].cultura}</Text>
                <Text style={styles.fontStyle}>{item[8].cultura}</Text>
                <Text style={styles.fontStyle}>{item[9].cultura}</Text>
                <Text style={styles.fontStyle}>{item[10].cultura}</Text>
                <Text style={styles.fontStyle}>{item[11].cultura}</Text>
                <Text style={styles.fontStyle}>{item[12].cultura}</Text>
                <Text style={styles.fontStyle}>{item[13].cultura}</Text>

              </View>
            )
          }
          contentContainerStyle={styles.list}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
  fontStyle: {
    fontSize: 20,
    padding: 15,
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },
  list: {
    paddingHorizontal: 50
  },
  listItem: {
    marginTop: 20,
    padding: 30,
  }
})

Home.navigationOptions = {
    title: 'Home',
  }