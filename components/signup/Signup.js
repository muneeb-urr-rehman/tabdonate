import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";

export default function Signup({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reEnterPassword, setReEnterPassword] = useState("");
    function register() {
        var axios = require('axios');
        var data = JSON.stringify({
            "name": `${name}`,
            "email": `${email}`,
            "password": `${password}`
        });

        var config = {
            method: 'post',
            url: 'http://192.168.10.7:3000/api/v1/user',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/logo.png")} />

            <StatusBar style="auto" />
            <TextInput
                style={styles.TextInput}
                placeholder="Name"
                placeholderTextColor="#003f5c"
                onChangeText={(name) => setName(name)}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Confirm Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(reEnterPassword) => setReEnterPassword(reEnterPassword)}
            />
            <TouchableOpacity style={styles.signupBtn} onPress={register}>
                <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.login_button}
                    onPress={() => navigation.navigate('Login')}
                >Login</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
        width: 200,
        height: 200
    },

    TextInput: {
        backgroundColor: "#42f578",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        textAlign: 'center'
    },

    login_button: {
        height: 30,
        marginTop: 30,
    },
    signupText: {
        color: "#fff"
    },

    signupBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#13c219",
    },
});

module.exports = Signup;