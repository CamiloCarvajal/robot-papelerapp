
import Room from "./Room";
import Start from "./Start";
import { handlerMQTT } from "../utils/MQTT"

import { View } from "react-native";
import Toast from 'react-native-toast-message';

function Home() {


    let rooms = [
        {
            key: 0,
            name: 'Baño',
            flag: 'bathroom',
            image: require('../assets/images/bathroom.jpg')
        }, {
            key: 1,
            name: 'Cocina',
            flag: 'kitchen',
            image: require('../assets/images/kitchen.jpg')
        }, {
            key: 2,
            name: 'Habitación',
            flag: 'bedroom',
            image: require('../assets/images/bedroom.jpg')
        }, {
            key: 3,
            name: 'Sala',
            flag: 'livingroom',
            image: require('../assets/images/livingroom.jpg')
        }
    ]


    return (
        <View>
            {
                rooms.map((room) => {
                    return (
                        <Room
                            key={room.key}
                            name={room.name}
                            flag={room.flag}
                            image={room.image}
                            publish={handlerMQTT} />
                    )
                }
                )
            }
            <Start publish={handlerMQTT} />
        </View>
    )
}

export default Home;