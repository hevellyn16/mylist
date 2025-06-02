import React from "react";

import {
    Text, 
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActionSheetIOS,
    ActivityIndicator,
} from "react-native";

import { styles } from "./style";
import Logo from "../../assets/logo.png";
import mail from "../../assets/mail.png";
import open from "../../assets/open.png";
import { themes } from "../../global/themes";
import closed from "../../assets/closed.png";


export default function Login() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    async function getLogin() {
        try {
            setLoading(true);

            if (!email || !password) {
                return Alert.alert('Atenção!','Preencha todos os campos!')
            }

            setTimeout(() => {
                if (email =='lynn.hev@gmail.com' && password == '123456') {
                    Alert.alert('Login realizado com sucesso!')
                } else {
                    Alert.alert('Atenção!', 'Usuário ou senha inválidos!')
                }
                
                setLoading(false);
            }, 2000)
            // Simulando uma requisição de login


        } catch (error) {
            console.log(error)
            Alert.alert('Erro!', 'Não foi possível realizar o login. Tente novamente.')

        }
    }

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
                value={email}
                onChangeText={setEmail}
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
                value={password}
                onChangeText={setPassword}
                />
                <Image
                source={closed}
                style={styles.iconInput}
                />
            </View>

        </View>

        <View style={styles.boxBottom}>
            <TouchableOpacity 
            style={styles.button} 
            onPress={() => getLogin()}>
                {loading ? 
                <ActivityIndicator color={'#ffff'} size={"small"} />
                :
                <Text style={styles.textButton}>ENTRAR</Text>}
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