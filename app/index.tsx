import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface IUserLogin {
  email: string
  password: string
}

export default function Login() {
  const [user, setUser] = useState<IUserLogin>({ email: '', password: '' })
  const [log, setLog ] = useState(Number())
  const login = () => {
    if (user.email == 'email@email' && user.password == '123') {
      router.replace('/home')
    }
    else setLog(2)
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Input variant='outline' size='lg'>
        <InputField onChangeText={(text) => setUser({ ...user, email: text })} placeholder='User' />
      </Input>

      <Input variant='outline' size='lg'>
        <InputField onChangeText={(text) => setUser({ ...user, password: text })} placeholder='Senha' type='password' />
      </Input>

      {log==2 ? <Text>Falha no Login!</Text>:<Text></Text>}

      <Button onPress={login} size="md" variant="solid" action="primary">
        <ButtonText>Acessar</ButtonText>
      </Button>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})