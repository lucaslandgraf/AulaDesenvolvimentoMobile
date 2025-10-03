import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function ProfileScreen() {
    const video = React.useRef(null);

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>Você está em Perfil</Text>
                
                <View style={Estilo.vidcontainer}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>
                        VIDEO ONLINE
                    </Text>
                    <Video
                        ref={video}
                        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                        isLooping
                        style={Estilo.vid}
                    />

                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        VIDEO LOCAL
                    </Text>
                    <Video
                        ref={video}
                        source={require("../assets/video/mov_bbb.mp4")}
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                        isLooping
                        style={Estilo.vid}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const Estilo = StyleSheet.create({
    vid: {
        alignSelf: 'center',
        width: '100%',
        height: 300,
    },
    vidcontainer: {
        width: 300,
        paddingBottom: 20, 
    }
});
