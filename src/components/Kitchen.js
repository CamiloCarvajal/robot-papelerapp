//import kitchen from "../../src/assets/images/kitchen.jpg"
import { View, Text, Image, Pressable } from 'react-native';

import styles from '../assets/styles/image'
// import { App } from '../utils/MQTT'

function Kitchen({publish}) {

    return (
        
        <View className="kitchen">

            <Pressable
                style={styles.card}
                onPress={() => publish("kitchen")}
               >
                <Text
                    style={styles.text_card}>
                    Cocina</Text>
                <Image
                    source={require("../../src/assets/images/kitchen.jpg")}
                    style={styles.image}
                />
            </Pressable>
        </View>
    )
}

export default Kitchen;