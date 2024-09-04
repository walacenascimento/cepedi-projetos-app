import {Feather} from '@expo/vector-icons';
import {InputContainer, Input, InputButton } from './styles' 

export function InputAddTask(){
    return(
        <InputContainer>
            <Input
                placeholder='Digite a tarefa'
                placeholderTextColor="white"
                keyboardType='default'
            />
            <InputButton>
                <Feather name="plus-square" size={24} color="white" />
            </InputButton>
        </InputContainer>
    );
}