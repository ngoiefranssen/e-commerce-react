import { useEffect, useRef, useState } from 'react';
import { MessageText, PromotionsContainer } from '../../styles/promotions';
import { Box, Slide } from '@mui/material';

const messages = [
  '15% off on your first  order!',
  'Summer sale starts now, visit  any store.',
  'Please like and subscribe :)'
];

export const Promotions = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [view, setView] = useState(true);

  const containerRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setView(false);
    }, 3000);

    const intervalById = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setView(true);

      setTimeout(() => {
        setView(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalById);
    };
  }, []);
  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={view ? 'left' : 'right'}
        in={view}
        timeout={{ enter: 500, exit: 300 }}
      >
        <Box display={'flex'} justifyContent="center" alignItems={'center'}>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
};
