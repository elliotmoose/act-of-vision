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

export function Normal(size=14) {
    return {...styles.normalFont,  fontSize: size};
}

export function Bold(size=14) {
    return {...styles.bold, fontSize: size};
}

const Fonts = { Normal, Bold }
export default Fonts;