import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="geral" />
      <ChannelButton channelName="memes" />
      <ChannelButton channelName="padrao-lendario" />
    </Container>
  )
}

export default ChannelList;