import { Button } from "react-native"

function Start({ publish }) {
    return (
        <Button
            title="Regresar"
            onPress={() => publish("start")}
        />
    )
}

export default Start