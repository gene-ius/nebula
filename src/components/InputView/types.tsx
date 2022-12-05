import { ImageSourcePropType } from "react-native"



export interface Idea {
    header: string
    body: string
    image?: ImageSourcePropType
    file?: any
    mood?: string
}