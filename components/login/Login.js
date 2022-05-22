import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Modal,
    Pressable
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage , setModalMessage] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = () => {
        if(email !=='' && password !==''){
        var axios = require('axios');
        var config = {
            method: 'get',
            url: `http://192.168.10.7:3000/api/v1/user/login/${email}/${password}`,
            headers: {
                'Content-Type': 'application/json'
            },
        };

        axios(config)
            .then(function (response) {
                if (response.status === 201 || response.status ===404) {
                    console.log(response.data);
                    setModalMessage (response.data.message);
                    setModalVisible(true);
                }
                else if (response.status === 200) {
                    navigation.navigate('Tabdonate')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        else{setModalMessage('Enter email & password');setModalVisible(true)}
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/logo.png")} />
            <StatusBar style="auto" />
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
            <TouchableOpacity style={styles.loginBtn}
                onPress={login}
            >
                <Text style={styles.loginText}
                >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgot_button}
                    onPress={() => navigation.navigate('SignUp')}
                >Sign Up</Text>
            </TouchableOpacity>
            {modalVisible &&
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{modalMessage}</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => { setModalVisible(!modalVisible) }}
                            >
                                <Text style={styles.textStyle}>Ok</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            }
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
    loginText: {
        color: "#fff"
    },
    forgot_button: {
        height: 30,
        marginTop: 10,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#13c219",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#13c219",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

module.exports = Login;