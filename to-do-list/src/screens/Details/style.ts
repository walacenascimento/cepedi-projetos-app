import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1%;
    background-color: #28385e;
    padding: 16px;
    padding-top: 64px;
    gap: 16px;
`;

export const TopContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const TopButton = styled.TouchableOpacity`
    flex-direction: row;;
    justify-content: start;
    align-items: center;
    gap: 16px;
`;

export const TopText = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
`;

export const TitleContainer = styled.View`
    background-color: #304163;
    border-radius: 4px;
    padding: 8px 16px;
`;

export const Title = styled.Text`
    color: #FFFFFF;
    font-size: 20px;
`;

export const TextStatus = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
`;

export const StatusContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
`;

export const StatusCard = styled.View`
    background-color: #304163;
    border-radius: 4px;
    flex-direction: row;
    gap: 16px;
    flex: 1;
`;

export const StatusIcon = styled.View`
    background-color: #e88a1a;
    border-radius: 4px;
    padding: 16px;
`;

export const StatusTextContainer = styled.View`
    padding: 16px;
`;

export const StatusText = styled.Text`
    color: #ffffff;
    font-size: 16px;
`;

export const StatusButtonDel = styled.TouchableOpacity`
    background-color: #F22424;
    border-radius: 4px;
    padding: 16px;
`;