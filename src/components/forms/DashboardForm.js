import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { PaperProvider, Button , TextInput, Appbar} from 'react-native-paper';
import React, {useState,useEffect} from 'react';
import { addDoc, collection, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../firebase';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';


export interface Todo {
    title: string;
    done: Boolean;
    id: string;
}


export default function DashboardForm(props) {    
  const [todo, setTodo] = React.useState(''); 
  const [todos, setTodos] = React.useState([]);

  useEffect(() => {
    const todoRef = collection(FIRESTORE_DB, 'todos');
    const subscriber = onSnapshot(todoRef, {
        next: (snapshot) => {
        
        const todos = [];
        snapshot.docs.forEach((doc) => {
            todos.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        setTodos(todos);
        
    },
    });
    return () => subscriber();
  }, []);

  const addTodo = async () => {
    console.log("Add");
    const doc = await addDoc(collection(FIRESTORE_DB, 'todos'), { title: todo, done: false })
    setTodo('')
  };

  const renderTodo = ({ item }: any) => {
  
  const ref = doc(FIRESTORE_DB,`todos/${item.id}`);

  const toggleDone = async() => {
    updateDoc(ref, {done: !item.done });
  };

  const deleteItem = async() => {
    deleteDoc(ref);
  };
  
  return (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 4,
    }}>
        <TouchableOpacity onPress={toggleDone} style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
        }}>
            {item.done && <Ionicons name='md-checkmark-circle'  size={28} color="green" />}
            {!item.done && <Entypo name='circle' size={28} color="black" />}

            <Text style={{
                flex: 1,
                paddingHorizontal: 4,
            }}>{item.title}</Text>
        </TouchableOpacity>
        <Ionicons name="close-outline" size={20} color="red" onPress={deleteItem} />
    </View>
  )
}
    

  return (
    <PaperProvider>
        <View style={{
            alignItems: 'center',
        }}> 
            <Text style = {{fontSize: 24, fontWeight: 'bold', color: '#00491E',marginLeft: 4,}}variant="displaySmall">Welcome, CMUan!</Text>
            <Text style = {{fontSize: 14, fontWeight: 'bold', color: '#00491E',marginLeft: 4,marginBottom:20,}}variant="displaySmall">Student ToDo List App</Text>
        </View>
        <View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <TextInput style={{
                    width: '60%',
                }}
                    activeOutlineColor="green"
                    
                    label="Write your task here"
                    value={todo}
                    onChangeText={(text: string) => setTodo(text)}
                    mode='outlined'
                    />
                <Button style={{
                    marginTop: 10,
                    width: '35%',
                    height: 45,
                    marginLeft: 10,
                    marginBottom: 10,
                    buttonColor: '00491E',
                    }}
                    theme={{ colors: { primary: 'green' } }}
                    mode="contained" disabled={todo === ''} onPress={() => addTodo()}>
                    Add Task
                </Button>
            </View>
            { todos.length > 0 && (
                <View>
                    <FlatList 
                    data={todos}
                    renderItem={(item) => renderTodo(item)}
                    keyExtractor={(todo: Todo) => todo.id} 
                    />
                </View>
                )}
        </View>
        <View style={{
                flex: 1,
        }}>
        <Button style={{
            
                justifyContent: 'flex-end',
                borderWidth: 1,
                marginTop: 25,
                height: 45,
                backgroundColor: "#00491E",
            
          }}mode="contained" onPress={() => props.navigation.navigate("LoginPage")}>
      <Ionicons name="log-out-outline" size={15} color="white" /> LOGOUT
    </Button>
        </View>
  </PaperProvider>
  )
}