import { FlatList, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Task } from '../../components/Task';
import { CardNumber } from '../../components/CardNumber';
import { InputAddTask } from '../../components/InputAddTask';
import { useEffect, useState } from 'react';
import {Feather} from '@expo/vector-icons';

{/*Comentário */}
export default function Home() {
  // estado que irá armazenar a lista de tarefas

  const [tasks, setTasks] = useState<{description: string; check: boolean}[]>([]);
  const [taskText, setTaskText] = useState(""); // estado com terfa vazia
  const [countTask, setCountTask] = useState(0); // Estado que irá atualizar o contador

  function handleTaskAdd() {
    if(taskText == " "){
      return Alert.alert("Erro:", "Essa tarefa está sem descrição.")
    }

    if(tasks.some((task)=> task.description === taskText)){
      return Alert.alert("Erro:", "Tarefa já existe!");
    }

    const newTask = {description: taskText, check: false};
    setTasks([...tasks, newTask]);
    setTaskText(" ");
  }

  function handleTaskChangeStatus(taskToChange:{description: string; check: boolean}){
    const updatedTasks = tasks.filter((task) => task !== taskToChange);
    const newTask = {
      description: taskToChange.description,
      check: !taskToChange.check,
    }
    updatedTasks.push(newTask);
    setTasks(updatedTasks);
  }

  function handleTaskDelete(taskToDelete : {description: string; check: boolean}) {
    Alert.alert("Atenção!", `Deseja realmente remover a tarefa ${taskToDelete.description} ?`,
      [
        {text: "Sim", onPress: () => {
            const updatedTasks = tasks.filter((task) => task != taskToDelete)
            setTasks(updatedTasks);
          }
        },
        {text: "Cancelar", style:"cancel"}
      ]
    )
  }

  useEffect(() => {
    let totalTasks = tasks.length;
    setCountTask(totalTasks);
  },[tasks]);

  return (
    <View style={styles.container}>

      <InputAddTask onPress={handleTaskAdd} onChangeText={setTaskText} value={taskText} />
      <View style={{flexDirection:'row', gap:16}}>
        <CardNumber title={"Cadastradas"} num={countTask} color="#1E1e1e"/>
        <CardNumber title={"Em aberto"} num={0} color="#e88a1a"/>
        <CardNumber title={"Finalizadas"} num={0} color="#0e9577"/>
      </View>

      <Text>Tarefas: {countTask}</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          ({item})=>(
            <Task
              title={item.description}
              status={item.check}
              onCheck={()=>handleTaskChangeStatus(item)}
              onRemove={() => handleTaskDelete(item)}
            />
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
