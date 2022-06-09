import { Box, Typography } from '@mui/material';
import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const Slider = () => {
  return (
    <Box >
       <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation={{ clickable: true }}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Typography variant='h6' color='white' >ISO 27001 Foundation : management de la sécurité de l'information</Typography>
        <Typography variant='h7' color='white' fontFamily='Inter-Light'>10 Juin 2022</Typography>
      </SwiperSlide>
      <SwiperSlide>
        <Typography variant='h6' color='white' >Formation ITIL 4</Typography>
        <Typography variant='h7' color='white' fontFamily='Inter-Light'>10 Juin 2022</Typography>
      </SwiperSlide>
      <SwiperSlide>
        <Typography variant='h6' color='white'>Formation ITIL 4</Typography>
        <Typography variant='h7' color='white' fontFamily='Inter-Light'>10 Juin 2022</Typography>
      </SwiperSlide>
      <SwiperSlide>
        <Typography variant='h6' color='white'>Formation ITIL 4</Typography>
        <Typography variant='h7' color='white'fontFamily='Inter-Light'>10 Juin 2022</Typography>
      </SwiperSlide>
      <SwiperSlide>
        <Typography variant='h6' color='white'>Formation ITIL 4</Typography>
        <Typography variant='h7' color='white' fontFamily='Inter-Light'>10 Juin 2022</Typography>
      </SwiperSlide>
      
      ...
    </Swiper>
        
     </Box>   
  )
}
