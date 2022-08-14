import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class _6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Image source={require('../images/6.png')} style={styles.image}></Image>

        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('_7')}>
<Text style={styles.routeText}>Next</Text>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

   droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    
  routeCard: {
        flex: 0.17,
        marginLeft: 100,
        marginRight: 50,
        marginTop: 100,
        borderRadius: 500,
        backgroundColor: 'white',
             transform: [{ rotate: '90deg' }],
            
    },

    routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue",
        marginTop: 1,
        paddingLeft: 10,
        
      
    },
  image: {
    paddingLeft: 100,
    height: 400,
    width: 600,
    transform: [{ rotate: '90deg' }],
  },
});
