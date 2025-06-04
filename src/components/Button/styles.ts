import { StyleSheet } from "react-native";

import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
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
});