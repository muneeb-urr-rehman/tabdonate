import React, { useState } from "react";
import { Avatar } from 'react-native-elements';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from "react-native";

function Ngo() {
    const organization = [
        {
            key: "1",
            Name: "Sylani",
            Address: "Gulistan-e-Johar 10B",
            Owner: "Maulana Bashir Farooq",
            URI:"https://saylani-welfare-uk.netlify.app/images.png"
        },
        {
            key: "2",
            Name: "Edhi",
            Address: "Kharadar Tower",
            Owner: "Abdul Sattar Edhi",
            URI:"https://scontent.fkhi11-1.fna.fbcdn.net/v/t31.18172-8/204399_204499896251561_5058930_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=973b4a&_nc_ohc=K8IEBRd5Wz8AX84D3gx&_nc_ht=scontent.fkhi11-1.fna&oh=00_AT-nYubNABzSdYG0Ego8BI7Zl-LC3TgiLxwZxSTwjlzPow&oe=6206B268"
        },
        {
            key: "3",
            Name: "Chippa",
            Address: "Shahrah-e-faisal",
            Owner: "Ramzan Chippa",
            URI:"https://scontent.fkhi11-1.fna.fbcdn.net/v/t1.6435-9/cp0/e15/q65/p64x64/89253131_209940623721347_1447360741316231168_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=85a577&_nc_ohc=utysg-wsJxAAX90st7p&_nc_ht=scontent.fkhi11-1.fna&oh=00_AT9ZSTAaMbsBxliXFDjLTVVwqGlYNyz79MN8ZSYKVhdEiQ&oe=6204FCEB"
        },
        {
            key: "4",
            Name: "JDC",
            Address: "Gurumandir",
            Owner: "Syed Zafar Abbas",
            URI:"https://scontent.fhdd3-1.fna.fbcdn.net/v/t1.6435-9/68629669_2937588156267974_702160941680164864_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3T1nt5i99nQAX_M5axV&_nc_ht=scontent.fhdd3-1.fna&oh=00_AT9qEe-32So1ldmi31Jwpa0g2unyfKsfeYvi5e46fkDH6Q&oe=62077C4F"
        }
    ];
    return (

        organization.map((element) => {
            return (

                <View style={styles.ngo} key={element.key} >
                    <Avatar
                        containerStyle={{ marginBottom: 20 }}
                        size="medium"
                        rounded
                        source={{uri:element.URI}}
                    />
                    <Text style={styles.detail}>NAME: {element.Name}</Text>
                    <Text style={styles.detail}>OWNER: {element.Owner}</Text>
                    <Text style={styles.detail}>ADDRESS: {element.Address}</Text>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>Donate</Text>
                    </TouchableOpacity>
                </View>

            );
        })
    );
}

export default function Home({ navigation }) {
    return (
        <ScrollView>
            <Ngo />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ngo: {
        borderWidth: 1,
        borderColor: "#5bde67",
        borderRadius: 50,
        padding: 20,
        margin: 10,
        marginTop: 20,
    },
    loginText: {
        color: "#fff"
    },
    loginBtn: {
        width: "40%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#13c219",
        marginLeft: "55%",
    },
    detail: {
        fontSize: 15,
        fontWeight: "bold",
    }
});

module.exports = Home;