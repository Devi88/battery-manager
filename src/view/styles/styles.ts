import {StyleSheet} from "react-native";

export const primaryColor = "rgba(120,190,32,1)";
export const primaryColorDark = "rgba(100, 160, 25, 1)";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container_form: {
        flex: 1,
        margin: 20
    },

    battery_list: {
        flex: 1
    },
    battery_list_item_content: {
        margin: 10,
        flex: 1,
    },
    battery_list_separator: {
        height: 2,
        backgroundColor: "#CCCCCC"
    },
    battery_list_button: {
        height: 50,
        width: 50,
        borderRadius: 200,
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryColor,
    },
    battery_list_button_text: {
        fontSize: 30,
        color: 'white'
    },
    text_center: {
        marginTop: 20,
        flex: 1,
        textAlign: 'center'
    }
});