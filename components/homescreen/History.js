import React, { useState } from "react";
// import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from "react-native";
const Historydata=()=> {
    // const navigation = useNavigation();
    const history = [
        {
            key: "1",
            Amount:"$100",
            Date: "1/3/21",
            Time: "8:38PM",
            NGOName: "JDC",
        },
        {
            key: "2",
            Amount:"$60",
            Date: "1/4/21",
            Time: "9:41AM",
            NGOName: "Edhi",
        },
        {
            key: "3",
            Amount:"$900",
            Date: "1/5/21",
            Time: "12:38PM",
            NGOName: "Chippa",
        },
    ];
    return(
        history.map((element)=>{
            return(
                <View style={styles.hiscontainer} key={element.key}>
                    <Text style={styles.detail}>NGO: {element.NGOName}</Text>
                    <Text style={styles.detail}>Amount: {element.Amount}</Text>
                    <Text style={styles.detail}>Date: {element.Date}</Text>
                    <Text style={styles.detail}>Time: {element.Time}</Text>
                </View>
            );
        })
    );

}
export default function History({ navigation }) {
    
    return (
      <ScrollView>
          <Historydata/>
      </ScrollView>
                
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    hiscontainer: {
        borderWidth: 1,
        borderColor: "#5bde67",
        borderRadius: 50,
        padding: 20,
        margin: 10,
        marginTop: 20,
    },
    detail: {
        fontSize: 15,
        fontWeight: "bold",
    }
});

module.exports = History;