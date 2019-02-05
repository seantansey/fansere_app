import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Avatar, ButtonGroup, Header, Card, ListItem, Button, Icon } from 'react-native-elements';

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 2,
      username: 'Marc_Wilk',
      tagline: 'Jordan > LeBron'
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({selectedIndex})
  }
  updateUsername = (text) => {
    this.setState({ username: text })
  }
  updateTagline = (text) => {
    this.setState({ tagline: text })
  }
  submit = (username, tagline) => {
    ('username' + username + 'tagline' + tagline)
  }

  render() {

    console.log("tagline", this.state.tagline)
    const buttons = ['Edit Profile', 'Friends', 'Teams']
    const { selectedIndex } = this.state

    return (

      <View style={styles.container}>

        <Header
        backgroundColor="#7ed957"
        placement="center"
        centerComponent={{ text: 'Profile', style: { color: 'white', fontSize: 22, fontWeight: 'bold' }}}
        />

        <Text style={styles.profileText} h1>{this.state.username}</Text>

        <Avatar size="large" onPress={() => console.log("Works!")}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
          showEditButton
        />

        <Text style={styles.taglineText} h2>{this.state.tagline}</Text>

        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          selectedButtonStyle={{backgroundColor: 'rgb(126, 217, 75)'}}
          buttons={buttons}
          containerStyle={{height: 30}}
        />

        <Card
          containerStyle={{height: 350, width: 300, padding: 10}}
          title='Edit Profile Details'>
          <Text style={{color: 'black'}}>
            Username:
          </Text>
          <TextInput
            underlineColorAndroid = "transparent"
            placeholder = "Username"
            placeholderTextColor = "black"
            autoCapitalize = "none"
            style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, margin: 10}}
            onChangeText={this.updateUsername}
            value={this.state.username}
          />
          <TouchableOpacity
            style = {styles.submitButton}
            onPress = {
              () => this.submit(this.state.username)
            }>
             <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
          <Text style={{color: 'black'}}>
            Tagline:
          </Text>
          <TextInput
            underlineColorAndroid = "transparent"
            placeholder = "Tagline"
            placeholderTextColor = "black"
            autoCapitalize = "none"
            style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, margin: 10}}
            onChangeText={this.updateTagline}
            value={this.state.tagline}
          />
          <TouchableOpacity
            style = {styles.submitButton}
            onPress = {
              () => this.submit(this.state.tagline)
            }>
             <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </Card>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    color: '#545454',
  },
  profileText: {
    fontWeight: 'bold',
    color: 'white',
  },
  taglineText: {
    color: 'white',
  },
  submitButton: {
   backgroundColor: 'rgb(126, 217, 75)',
   padding: 10,
   height: 40,
   margin: 10
  },
  submitButtonText:{
    backgroundColor: 'rgb(126, 217, 75)',
    color: 'white'
  }
})
