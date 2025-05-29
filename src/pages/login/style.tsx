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
        padding: 20,
    },

    boxTop: {
        marginTop: 100,
        height: Dimensions.get('window').height * 0.3, // 30% of the screen height
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'white',
    },

    boxMid: {
        height: Dimensions.get('window').height * 0.4, // 40% of the screen height
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 37,
    },

    boxBottom: {
        height: Dimensions.get('window').height * 0.3, // 30% of the screen height
        width: '100%',
        backgroundColor: 'white',
    },

    logo: {
        width: 80,
        height: 80,
    },

    header: {
        fontWeight:'bold',
        marginTop:40,
        fontSize: 25,
    },

    loginInput: {
        marginLeft:5,
        color:themes.colors.gray,
        marginTop: 20,
    },

    BoxInput:{
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: themes.colors.lightGray,
        borderRadius: 40,
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },

    input: {
        height: '100%',
        borderRadius: 40,
        width: '90%',

    },

    iconInput: {
        width: 20,
        height: 20,
    }
});

