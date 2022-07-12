import { Button, Typography } from '@mui/material';
import React from 'react'
import ReactPlayer from 'react-player';
const VideoSection = ({title,desc}) => {
  return (
    <div class="relative bg-gray-50 overflow-hidden">
  <div class="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
    <svg class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784" fill="red" viewBox="0 0 640 784">
      <defs>
        <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
      <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
    </svg>
    </div>

  <div class="relative pt-6 pb-16 sm:pb-14 lg:pb-22">
    
    <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-14 sm:px-6 lg:mt-22">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        
           {/*   <h1> <span class="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">Coming soon</span>
            <span class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
              */}{/*  <span class="block text-gray-900">Data to enrich your</span>
              <span class="block text-indigo-600">online business</span> */}
              <Typography fontWeight='bold' fontSize={42} fontFamily='Inter'>{title}</Typography>
            {/* </span></h1> */}
          
        {/*   <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">{desc}</p> */}
        <Typography fontWeight='600' fontSize={14} letterSpacing={1.5} lineHeight={2} fontFamily='Inter-Roman' >{desc}Disposer des meilleurs candidats aux meilleurs moments, permet de s’assurer de ne pas manquer d’opportunitésDisposer des meilleurs candidats aux meilleurs moments, permet de s’assurer de ne pas manquer d’opportunitésDisposer des meilleurs candidats aux meilleurs moments, permet de s’assurer de ne pas manquer d’opportunités</Typography>
          <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
           
            <Button variant='contained' color='error'>Demandez une demo</Button>
          </div>
          
        </div>
        
         <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
      
            
          <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
          <ReactPlayer playing={true} className='react-player' width='100%'  height='400px'
           url='https://www.youtube.com/watch?v=hYv6BM2fWd8' />


          </div>
        </div> 

      </div>
    </main>
  </div>
</div>

  )
}
export default VideoSection