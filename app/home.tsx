import { useState } from "react";
import { Text, View } from "react-native";

export default function Home(){
    const [tarefas, setTarefas] = useState([])
    return(
        <View>
            <Text>Home</Text>
        </View>
    )
}