import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>chet-livre</Title>

      <Separator />

      <Description>Canal aberto para putaria</Description>
    </Container>
  )
}

export default ChannelInfo;