import React from "react";
import {Text, View, StyleSheet} from 'react-native';

function MemberResult({route}){
    const {user} = route.params;
    return(
        <View>
            <Text style={styles.message}>Kayıt İşleminiz Yapılmıştır</Text>
            <Text style={styles.label}>Üye Adı: {user.name}</Text>
            <Text style={styles.label}>Üye Soyadı: {user.surname}</Text>
            <Text style={styles.label}>Üye E-posta: {user.email}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    label:{
        fontSize:22,
        color:'black',
        fontWeight:'bold',
        margin:10
    },
    message:{
        fontSize:22,
        color:'#800000',
        textAlign:'center',
        fontWeight:'bold',
        margin:10
    }
});

export default MemberResult;