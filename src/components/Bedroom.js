//import kitchen from "../../src/assets/images/kitchen.jpg"
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import styles from '../../src/assets/styles/image'

function Bedroom() {
    return (
        <View className="bedroom"
        style={styles.card}>

            <Text 
            style={styles.text_card}
            >Habitación</Text>
            <Image
                source={require("../../src/assets/images/bedroom.jpg")}
                style={styles.image}
            />

        </View>
    )
}

export default Bedroom;