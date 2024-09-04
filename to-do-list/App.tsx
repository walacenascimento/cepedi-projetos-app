import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Task } from './src/components/Task';
import { CardNumber } from './src/components/CardNumber';
import { useEffect, useState } from 'react';
import {Feather} from '@expo/vector-icons';

{/*Comentário */}
export default function App() {
  // estado que irá armazenar a lista de tarefas
  //const [tasks, setTasks] = useState<{description: string, check: boolean}[]>([]); quebra a aplicação
  const [tasks, setTasks] = useState([]); // funciona normal
  const [taskText, setTaskText] = useState(" "); // estado
  const [countTask, setCountTask] = useState(0);

  function handleTaskAdd() {
    if(taskText == " "){
      return Alert.alert("Erro:", "Essa tarefa está sem descrição.")
    }

    if(tasks.some((task) => task === taskText)){
      return Alert.alert("Erro:", "Tarefa já existe!");
    }

    const newTask = {taskText};
    setTasks([...taskText, newTask]);
    setTaskText(" ");
  }

  useEffect(() => {
    let totalTasks = tasks.length;
    setCountTask(totalTasks);
  },[tasks]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Digite a tarefa'
          placeholderTextColor="white"
          keyboardType='default'
          onChangeText={setTaskText}
          value={taskText}
        />
        <TouchableOpacity style={styles.inputButton} onPress={handleTaskAdd}>
          <Feather name="plus-square" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', gap:16}}>
        <CardNumber />
        <CardNumber />
        <CardNumber />
      </View>

      <Text>Tarefas: {countTask}</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          ({item})=>(
            <Task />
          )
        }
        ListEmptyComponent={() => (
          <View>
            <Text>Você ainda não cadastrou nenhuma tarefa!</Text>
            <Text>Crie uma tarefa para começar</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28385E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop: 60,
    gap: 16,
  },

  inputContainer:{
    flexDirection:'row',
    borderRadius: 4,
    backgroundColor: '#252627'
  },

  input: {
    flex: 1,
    padding: 16,
    color:'#fff'
  },

  inputButton: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 4,
  }
});
