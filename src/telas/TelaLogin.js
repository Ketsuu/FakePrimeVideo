//import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import Cores from "../constantes/Cores";

import COR from "../constantes/Cores"
import IMAGEM from "../constantes/Imagens"

const TelaLogin = ({navigation}) => {

    const executaLogin = () =>{
        navigation.navigate ("principal")
    }

    return (
        <ImageBackground
            source={IMAGEM.FUNDO_LOGIN}
            style={estilo.imagemFundo}
        >
            <View style={estilo.tela}>
                <StatusBar
                    style="auto"
                    translucent={false}
                    backgroundColor={COR.FUNDO_BASICO}
                />
                <View style={estilo.containerLogo}>
                    <Image source={IMAGEM.LOGO} style={estilo.logo}/>
                </View>
                <View style={estilo.containerEntrada}>
                    <TextInput
                    style={estilo.caixaTexto}
                    placeholder="E-mail"
                    placeholderTextColor={COR.LINK}
                    />
                    <TextInput
                    style={estilo.caixaTexto}
                    placeholder="Senha"
                    placeholderTextColor={COR.LINK}
                    />

                    <TouchableOpacity
                        style={estilo.botao}
                        onPress={executaLogin}
                    >
                        <Text style={estilo.textoBotao}>Entrar</Text>
                    </TouchableOpacity>

                    <View style={estilo.containerRodape}>
                        <TouchableOpacity>
                            <Text style={estilo.textoLink}>Crie uma conta</Text>
                        </TouchableOpacity>
                        <Text style={estilo.texto}> -|- </Text>
                        <TouchableOpacity>
                            <Text style={estilo.textoLink}>Esqueci a senha!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};




const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: COR.PRETO_TRANSPARENTE,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imagemFundo:{
        width: '100%',
        height: '100%',

    },
    containerLogo:{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerEntrada:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo:{
        width: 243,
        height: 105,
    },

    texto:{
        color: COR.BRANCO,
        fontSize: 18,
    },

    textoLink:{
        color: COR.LINK,
        fontSize: 18,
    },
    caixaTexto:{
        height: 50,
        width: 350,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: COR.FUNDO_CAIXA_TEXTO,
        padding: 10,
        color: COR.BRANCO,
    },
    botao: {
      borderColor: COR.BOTAO_BORDA,
      borderWidth: 2,
      height: 50,
      width: 350,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    textoBotao:{
        color: COR.BOTAO_TEXTO,
        fontSize: 25,
    },

    titulo: {
        alignSelf: 'center',
    },
});

export default TelaLogin;