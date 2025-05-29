import React from "react";

import {
    Text, 
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import Logo from "../../assets/logo.png";
import mail from "../../assets/mail.png";
import open from "../../assets/open.png";
import { themes } from "../../global/themes";
import closed from "../../assets/closed.png";

export default function Login() {
  return (
    <View style={styles.container}>
        <View style={styles.boxTop}>
            <Image 
            source={Logo}
            style={styles.logo} 
            resizeMode="contain"
            />
            <Text style={styles.header}>Seja bem-vindo(a)!</Text>
        </View>

        <View style={styles.boxMid}>
            <Text style ={styles.loginInput}>ENDEREÇO DE E-MAIL</Text>
            <View style={styles.BoxInput}>
                <TextInput 
                style={styles.input}
                />
                <Image
                source={mail}
                style={styles.iconInput}
                />
            </View>
            <Text style ={styles.loginInput}>SENHA</Text>
            <View style={styles.BoxInput}>
                <TextInput 
                style={styles.input}
                />
                <Image
                source={open}
                style={styles.iconInput}
                />
            </View>
        </View>

        <View style={styles.boxBottom}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>ENTRAR</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.bottom}>
            <Text style={styles.createAccount}>
            Não tem uma conta? {' '}
            <Text style={styles.createAccountBold}>
                Criar conta
            </Text>

        </Text>
        </View>
    </View>
  );
}