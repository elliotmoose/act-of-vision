import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
    normalFont : {
        fontFamily: 'charter',
    },
    italic : {
        fontFamily: 'charter',
        fontStyle: 'italic'
    },
    bold : {
        fontFamily: 'charter',
        fontWeight: '600'
    },
    normalHelvetica : {
        fontFamily: 'helvetica neue',
    },
    boldHelvetica : {
        fontFamily: 'helvetica neue',
        fontWeight: '600'
    },
})

export function Normal(size=14) {
    return {...styles.normalFont,  fontSize: size};
}

export function Bold(size=14) {
    return {...styles.bold, fontSize: size};
}

export function Italic(size=14) {
    return {...styles.italic, fontSize: size};
}

export function NormalHelvetica(size=14) {
    return {...styles.normalHelvetica,  fontSize: size};
}

export function BoldHelvetica(size=14) {
    return {...styles.boldHelvetica, fontSize: size};
}

const Fonts = { Normal, Bold, NormalHelvetica, BoldHelvetica, Italic}
export default Fonts;