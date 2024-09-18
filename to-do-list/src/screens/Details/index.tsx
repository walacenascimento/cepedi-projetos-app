import { Container, StatusButtonDel, StatusCard, StatusContainer, StatusIcon, StatusText, StatusTextContainer, TextStatus, Title, TitleContainer, TopButton, TopContainer, TopText } from "./style";
import  {Feather} from "@expo/vector-icons";

import { RootStackParamList } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Details({route}: any){

    const {id, title, status} = route.params;
    const navigation = useNavigation<Props['navigation']>();

    return(
        <Container>
            <TopContainer>
                <TopButton>
                    <Feather name='chevron-left' size={24} color='white' />
                    <TopText> voltar </TopText>
                </TopButton>
            </TopContainer>
            <TitleContainer>
                <Title>Tarefa</Title>
            </TitleContainer>
            <TextStatus>Status da Tarefa:</TextStatus>
            <StatusContainer>
                <StatusCard>
                    <StatusIcon>
                        <Feather name="square" size={24} color='white'/>
                    </StatusIcon>
                    <StatusTextContainer>
                        <StatusText>Teste</StatusText>
                    </StatusTextContainer>
                </StatusCard>
                <StatusButtonDel>
                    <Feather name="trash-2" size={24} color='white' />
                </StatusButtonDel>
            </StatusContainer>
        </Container>
    );
}