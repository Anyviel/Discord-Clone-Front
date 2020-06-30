import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {

  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef])

  return (
    <Container>
      <Messages>
        <ChannelMessage author="Anyviel" date="30/06/2020" content="Foi mal Boizaum" />
        <ChannelMessage author="Tsubuki" date="30/06/2020" content= {
          <>
            <Mention>@Anyviel</Mention>, te fudê rapá!
          </> 
        } hasMention isBot />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #geral" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;