//import kitchen from "../../src/assets/images/kitchen.jpg"
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import styles from '../../src/assets/styles/image'

function Livingroom() {
    return (
        <View className="livingroom"
        style={styles.card}>

            <Text 
            style={styles.text_card}
            >Sala</Text>
            <Image
                source={require("../../src/assets/images/livingroom.jpg")}
                style={styles.image}
            />

        </View>
    )
}

export default Livingroom;