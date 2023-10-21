//import kitchen from "../../src/assets/images/kitchen.jpg"
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import styles from '../../src/assets/styles/image'

function Bathroom() {
    return (
        <View className="bathroom"
            style={styles.card}>

            <Text
                style={styles.text_card}>
                Baño
            </Text>
            <Image
                source={require("../../src/assets/images/bathroom.jpg")}
                style={styles.image}
            />

        </View>
    )
}

export default Bathroom;