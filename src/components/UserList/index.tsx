import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>

      <UserRow nickname="Cakito Jr" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Tsubuki" isBot={true} />
      <UserRow nickname="Cicrano" />
      <UserRow nickname="Cicrano" />
      <UserRow nickname="Cicrano" />
      <UserRow nickname="Cicrano" />
      <UserRow nickname="Marciano" />
      <UserRow nickname="Cicrano" />
      <UserRow nickname="Cicrano" />
      <UserRow nickname="Alienado" />
      <UserRow nickname="Cicrano" />
      <UserRow nickname="Cicrano" />
      <UserRow nickname="Cicrano" />
      <UserRow nickname="Cicrano" />
      <UserRow nickname="Cicrano" />
    </Container>
  )
}

export default UserList;