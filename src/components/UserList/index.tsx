import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar />

      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  )
}

const ServerName: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>

      <UserRow nickname="Cakito Jr" />
      <UserRow nickname="Carlin Jr" />
    </Container>
  )
}

export default ServerName;