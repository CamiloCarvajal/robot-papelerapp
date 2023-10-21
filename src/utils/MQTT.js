import { Mqtt } from 'sp-react-native-mqtt';
import base64 from 'react-native-base64';


const credentials = {
    'clientId': 'cristiancarvajal.dev@gmail.com',
    'userName': 'Robotica2023',
    'password': 'vToJYrMq-SuX1Krew',
    'cleanSession': true
}


export async function getToken() {

    let out = { result: 400, tokenId: ''}
    const url = "https://node02.myqtthub.com/login"

    await fetch(url, {
        method: "POST",
        body: JSON.stringify(credentials),
    })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            out.result = 200
            out.tokenId = response.tokenId
        })
        .catch((error) => {
            out.error = `Getting token: ${error}`
        })

    return out
}


export async function publishMessage(tokenId, signal) {

    let out = { result: 400, payload: null }
    const url = "https://node02.myqtthub.com/publish"
    const message = {
        'qos': 1,
        'topic': '/papelera',
        'payload': base64.encode(signal),
        'dup': false,
        'retain': true,
        'tokenId': tokenId
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(message),
        })

        out.result = response.status
        out.payload = response.ok
    } catch (error) {

        out.error = `Publishing message: ${response.body}. [${error}]`
    }


    return out
}


export async function logout(tokenId) {

    let out = { result: 400, payload: null }
    const url = "https://node02.myqtthub.com/logout"
    const message = {
        'tokenId': tokenId
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(message),
            headers: {
                Cookie: `tokenId=${tokenId}`
              }
        })

        out.result = response.status
        out.payload = response.ok

    } catch (error) {
        out.error = `Logout: ${response.body}. [${error}]`
    }

    return out
}


export async function handlerMQTT(message) {

    // console.log(message)
    const out   = { result: 200 }
    // return out

    const token = await getToken();

    if (token.result == 400) {
        return token;
    }

    const published = await publishMessage(token.tokenId, message)

    if (published.result == 400) {
        return published;
    }
    const logOut = await logout(token.tokenId)

    if (logOut.result == 400) {
        return logOut;
    }

    return out

}

