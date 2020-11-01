import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
    normalFont : {
        fontFamily: 'charter',
    },
    bold : {
        fontFamily: 'charter',
        fontWeight: '600'
    },
})

export function Normal() {
    return styles.normalFont;
}

export function Bold() {
    return styles.bold;
}

const Fonts = { Normal, Bold }
export default Fonts;