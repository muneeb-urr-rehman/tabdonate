import React from "react";
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import { Avatar,Image } from 'react-native-elements';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Linking
} from "react-native";

export default function ContactUs() {

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={require("../../assets/logo.png")} />
            </View>
            <View style={styles.links} >
            <Text style={styles.text}  onPress={() => Linking.openURL('mailto:tabdonate@example.com') }
            title="tabdonate@example.com"><Icon name="mail" size={20} />tabdonate@example.com</Text>
             <Text style={styles.text} onPress={() => Linking.openURL('tel:+921233456789') }
            ><Icon name="phone" size={20} />+921233456789</Text>
             <Text style={styles.text} onPress={() => Linking.openURL('http:facebook.com') }
            ><Icon name="facebook-square" size={20} />Tabdonate</Text>
            <Text style={styles.text} onPress={() => Linking.openURL('http:instagram.com') }
            ><Icon name="instagram" size={20} />Tabdonate_2021</Text>
            <Text style={styles.text} onPress={() => Linking.openURL('tel:+921233456789') }
            ><Icons name="whatsapp" size={20} />+92122145345</Text>
            <Text style={styles.tag}>Prosperity in charity</Text>
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
        width: 200,
        height: 200
    },
    links:{
        alignItems: "center",
    },
    text :{
        margin:10
    },
    tag:{
        marginTop:30,
        fontSize:30,
        color:'#1aba37'
    }

});

module.exports = ContactUs;