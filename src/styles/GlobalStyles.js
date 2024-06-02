import { StyleSheet } from "react-native";
import { myColours } from "./colours";

export const Styles = StyleSheet.create({
    // Buttons
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: myColours.blue,
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: myColours.gray,
        margin: 8,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: myColours.light,
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: myColours.dark,
    },
    // Text
    smallTextLight: {
        fontSize: 30,
        color: myColours.light,
    },
    smallTextDark: {
        fontSize: 30,
        color: myColours.dark,
    },
    // Views
    viewBottom: {
        // height: '50%',
        width: '100%',
        backgroundColor: myColours.light,
        // justifyContent: 'flex-start',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '20%',
        width: '100%',
    },
    screenSecondNumber: {
        color: myColours.dark,
        fontSize: 50,
        fontWeight: '500',
        textAlign: 'right',
    },
    screenFirstNumber: {
        color: myColours.dark,
        fontSize: 50,
        fontWeight: '500',
        textAlign: 'right',
    },
    // Text Input
    textInput: {
        color: myColours.light,
        fontSize: 50,
        fontWeight: '500',
    },
    // Keyboard
    keyboard: {
        height: '50%',
        width: '100%',
        backgroundColor: myColours.dark,
        justifyContent: 'flex-end',
    },
});