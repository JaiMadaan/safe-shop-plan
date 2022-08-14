import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
               
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Safe Shop Presentation</Text>
                    </View>
                    <View>
                        <Text style={styles.routeText}>Dreams Don't work unless you work hard</Text>
                       </View>
                       
                   
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("_1")
                    }>
                        <Text style={styles.routeText}>Start the plan</Text>
                        
                    </TouchableOpacity>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'yellow'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    routeCard: {
        flex: 0.10,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 100,
        borderRadius: 500,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.35,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "red"
    },
    routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue",
        marginTop: 10,
        paddingLeft: 40
    },
    
});