import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import Button from '../components/Button';

function Welcome({navigation}){
    function GoToMemberSignPage(){
        navigation.navigate('MemberSignPage');
    }
    return(
        <View style={styles.container}>
            <Text style={styles.header}>KEMAN KURSU</Text>
            <Button text="Üye Kaydı Oluştur" onPress={GoToMemberSignPage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    header:{
        fontSize:30,
        fontWeight:'bold',
        color:'black',
        margin:10
    }
});

export default Welcome;