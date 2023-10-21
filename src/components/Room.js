//import kitchen from "../../src/assets/images/kitchen.jpg"
import Toast from 'react-native-toast-message';
import { View, Text, Image, Pressable } from 'react-native';

import styles from '../assets/styles/image'
// import { App } from '../utils/MQTT'

function Room({ name, image, flag, publish }) {

    const callFunction = async () => {

        try {

            let result = await publish(flag)

            if (result.result == 400) {
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: result.error
                });
            } else {
                Toast.show({
                    type: 'success',
                    text1: name,
                    text2: 'Called'
                });
            }
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: `Calling room [${error}]`
            });

        }

    }

    return (

        <View className={name}>

            <Pressable
                style={styles.card}
                onPress={callFunction}
            >
                <Text
                    style={styles.text_card}>
                    {name}
                </Text>
                <Image
                    source={image}
                    style={styles.image}
                />
            </Pressable>
        </View>
    )
}

export default Room;