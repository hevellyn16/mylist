import { StyleSheet } from "react-native";

import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
     BoxInput:{
            width: '100%',
            height: 40,
            borderWidth: 1,
            borderColor: themes.colors.black,
            borderRadius: 40,
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
            paddingHorizontal: 15,
            backgroundColor: themes.colors.lightGray,
    },

    input: {
        height: '100%',
        borderRadius: 40,
        width: '90%',
    },


    loginInput: {
        marginLeft:5,
        color:themes.colors.black,
        marginTop: 20,
    },

    icon: {
        width: 20,
        height: 20,
    },
});