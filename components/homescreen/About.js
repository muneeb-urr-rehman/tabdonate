import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image
} from "react-native";

export default function About() {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/logo.png")} />
        <Text style={styles.tag}>Our Vision</Text>
        <Text style={styles.text}>Our vision is to make donating money easier for people for needy one and charity organizations
            to establish connection between NGOs and their donators so they can easity donate to their trusted NGOs
        </Text>
        <Text style={styles.tag}>Our Mission</Text>
        <Text style={styles.text}>Our mission is to bring prosperity and wealth to poor people and enhance health and
        end hunger and overcome hardship from people by providing them better platform for funding needy ones.
        </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    tag:{
        fontSize:30,
        color:'#1aba37'
    },
    text:{
        fontSize:18,
        margin:8,
        textAlign: 'center',
        fontWeight:"bold",
    },
    image: {
        width: 150,
        height: 150
    },
});

module.exports = About;