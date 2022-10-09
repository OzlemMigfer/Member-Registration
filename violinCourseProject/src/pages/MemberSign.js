import React, {useState} from "react";
import {Text, View, StyleSheet, Alert} from 'react-native';
import Input from "../components/Input";
import Button from '../components/Button';

function MemberSign({navigation}){
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    function saveMember(){
        if(!name || !surname || !email){
            Alert.alert('Keman Kursu','Eksik Doldurdunuz!');
            return;
        }
        const user = {
            name,
            surname,
            email
        };
        navigation.navigate('MemberResultPage',{ user });
    }

    return(
        <View style={styles.container}>
            <Text style={styles.header}>ÜYE KAYDI</Text>
            <Input label="Üye Adı" placeholder='Üye Adı Giriniz' onChangeText={setName} />
            <Input label="Üye Soyadı" placeholder="Üye Soyadı Giriniz" onChangeText={setSurname}/>
            <Input label="Üye E-posta" placeholder="Üye E-posta Giriniz" onChangeText={setEmail}/>
            <Button text="Kaydı Tamamla" onPress={saveMember} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        fontSize:30,
        margin:20,
        fontWeight:'bold',
        color:'#009933'
    }
});

export default MemberSign;