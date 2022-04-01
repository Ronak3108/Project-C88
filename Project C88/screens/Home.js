import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <View style={styles.Container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <View styte={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar App</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Spacecrarts</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Star Map</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Daily Pictures</Text>
                </TouchableOpacity>
            </View>
        )

        const styles = StyleSheet.create({
            Container: {
                flex: 1
            },

            droidSafeArea: {
                marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
            },
            routeCard: {
                flex: 0.12,
                justifyContent: "center",
                alignItems: "center",
                margin: 10,
                marginLeft: 38,
                marginRight: 30,
                borderRadius: 08,
                backgroundColor: "white"
            },

            titleBar: {
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center"
            },
            titleText: {
                fontSize: 40,
                fontWeight: "bold",
                color: "white"
            },
            routeText: {

                fontSize: 25,
                fontWeight: "bold",
                color: '#D11583',
                justiryContent : "center",
                alignItems: "center"
            }

        });
    }
}