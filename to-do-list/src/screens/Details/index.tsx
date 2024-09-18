import { Container, StatusButtonDel, StatusCard, StatusContainer, StatusIcon, StatusText, StatusTextContainer, TextStatus, Title, TitleContainer, TopButton, TopContainer, TopText } from "./style";
import  {Feather} from "@expo/vector-icons";

import { RootStackParamList } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

type Props = NativeStackScreenProps<RootStackParamList>;

/*export default function Details({route}: any){*/
export default function Details(){
    const {task} = useContext(TaskContext)
    const navigation = useNavigation<Props['navigation']>();

    return(
        <Container>
            <TopContainer>
                <TopButton onPress={()=>navigation.popToTop()}>
                    <Feather name='chevron-left' size={24} color='white' />
                    <TopText> voltar </TopText>
                </TopButton>
            </TopContainer>
            <TitleContainer>
                {/*<Title>{title}</Title>*/}
                <Title>{task.title}</Title>
            </TitleContainer>
            <TextStatus>Status da Tarefa:</TextStatus>
            <StatusContainer>
                <StatusCard>
                    <StatusIcon style={task.status  ? {backgroundColor: '#0e9577'} : {}}>
                        {!task.status && <Feather name="square" size={24} color="white" />}
                        {task.status && <Feather name="check-square" size={24} color="white" />}
                    </StatusIcon>
                    <StatusTextContainer>
                        <StatusText>{task.status ? "Realizada" : "Em aberto"}</StatusText>
                    </StatusTextContainer>
                </StatusCard>
                <StatusButtonDel>
                    <Feather name="trash-2" size={24} color='white' />
                </StatusButtonDel>
            </StatusContainer>
        </Container>
    );
}