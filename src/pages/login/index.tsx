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
import { themes } from "../../global/themes";
import { Input } from "../../components/Input";
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';


export default function Login() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    async function getLogin() {
        try {
            setLoading(true);

            if (!email || !password) {
                setLoading(false);
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
            <Input
                value={email}
                onChangeText={setEmail}
                title="ENDEREÇO DE E-MAIL"
                IconRight={MaterialIcons}
                iconRightName="email"
            />

            <Input
                value={password}
                onChangeText={setPassword}
                title="SENHA"
                IconRight={Octicons}
                iconRightName={showPassword?"eye-closed":"eye"}
                secureTextEntry={showPassword}
                onIconRightPress={()=>setShowPassword(!showPassword)}
            />
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