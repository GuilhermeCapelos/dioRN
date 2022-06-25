import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';

const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/89097806?s=400&u=5586a7533e5d898cd731f88bd3891e938b2acc60&v=4';

const urlToMyGithub = 'https://github.com/GuilhermeCapelos'

const App = () => {

    const handlePressGoToGithub = async () =>{
        console.log('Verificando link');
       const res = await Linking.canOpenURL(urlToMyGithub);
       if(res){
        console.log('Link aprovado');
        console.log('Abrindo link...');
        await Linking.openURL(urlToMyGithub);
       }
    }
    return(
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle ='ligth-content' />
            
            <View style={style.content}>
            <Image accessibilityLabel='Guilherme não sabe tirar foto' style={style.avatar} source={{uri:imageProfileGitHub}} />
            <Text accessibilityLabel="Nome: Guilherme Capelos" style={[style.defaultText, style.name]}>Guilherme Capelos</Text>
            <Text accessibilityLabel="Nickname: Guilherme Capelos" style={[style.defaultText, style.nickname]}>guilhermecapelos</Text>
            <Text accessibilityLabel="Description: Estudante de programação, atualmente concluindo bootcamp de front-end pela DIO (Decola Teck 3°Edição)" style={[style.defaultText, style.description]}>Estudante de programação, atualmente concluindo bootcamp de front-end pela DIO (Decola Teck 3°Edição)</Text>
           
            <Pressable onPress={handlePressGoToGithub}>
           
            <View style={style.button}>
                <Text style={[style.defaultText, style.textButton]}> Open in Github </Text>
            </View>
            </Pressable>
        </View>
      </SafeAreaView>
    );
   };

export default App;

const style = StyleSheet.create({
    container:{
        //Column
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
    },
    content: {
        alignItems:'center',
        padding: 20,
    },
    avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
   },
   defaultText:{
    color: colorFontGitHub,
   },
   name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
   },
   nickname: {
    fontSize: 16,
    color: colorDarkFontGitHub,
   },
   description:{
    fontWeight: 'bold',
    fontSize: 14,
   },
   button:{
    marginTop: 20,
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
   },
    textButton:{
    fontWeight: 'bold',
    fontSize: 16,
    },
});