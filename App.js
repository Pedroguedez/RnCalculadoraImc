import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, PaperProvider, TextInput } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="Calculadora IMC" />
      </Appbar.Header>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
