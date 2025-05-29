import { 
    StyleSheet,
    Dimensions,

} from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxTop: {
        height:Dimensions.get('window').height/4,
        width:'100%',
        // backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },

    boxMid: {
        height:Dimensions.get('window').height/4,
        // backgroundColor:'blue',
        width:'100%',
        paddingHorizontal:37,
    },

    boxBottom: {
        height:Dimensions.get('window').height/5,
        // backgroundColor:'green',
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-start'
    },

    logo: {
        width:80,
        height:80,
        marginTop:40
    },

    header: {
        fontWeight:'bold',
        marginTop:35,
        fontSize: 25,
    },

    loginInput: {
        marginLeft:5,
        color:themes.colors.black,
        marginTop: 20,
    },

    BoxInput:{
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: themes.colors.black,
        borderRadius: 40,
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: themes.colors.lightGray,
    },

    input: {
        height: '100%',
        borderRadius: 40,
        width: '100%',
    },

    iconInput: {
        width: 20,
        height: 20,
    },

    button: {
        position: 'absolute',
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        
    },

    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: themes.colors.purple,
    },

    bottom: {
        position: 'absolute',
        bottom: 70,
        width: '100%',
        alignItems: 'center',
    },
    
    createAccount: {
        fontSize: 16,
        color: themes.colors.black,
    },

    createAccountBold: {
        fontSize: 16,
        fontWeight: 'bold',
        color: themes.colors.primary,
    },
});

