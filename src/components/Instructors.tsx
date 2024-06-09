'use client';
import React from 'react'
import { WavyBackground } from './ui/wavy-background';
import { AnimatedTooltip } from './ui/animated-tooltip';


const instructors = [
  {
    id: 1,
    name: 'Arijit Singh',
    desination: 'Vocal Coach',
    image: 'https://pbs.twimg.com/profile_images/1387822869619478540/lhocXKtV_400x400.jpg'
  },
  {
    id: 2,
    name: 'Kanye West',
    desination: 'Music Composer or Tune Instrutor',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbdgz3_BkE0naWHETBfd0wAfw57qix-Zw-hmcTFNJd60c2XgLWkjwLBik-4yrCKdjoeE&usqp=CAU'
  },
  {
    id: 3,
    name: 'Travis Scott',
    desination: 'Music Video Producer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlmQAzkd7Nv2EkGk7McAWyLgowOeQO6k9CHg&s'
  },
  {
    id: 4,
    name: 'Kendrick Lamar',
    desination: 'Lyrical Instructor',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4kFctHkV0YSMfF7w1k2vqoapPcfMOC3RvA&s'
  },
  {
    id: 5,
    name: 'A. R. Rahman',
    desination: 'Musical Composer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5a7OoQbd810bENzpgu1mZE-957fXyaX2gNkAU20RWBYHckezeRSYt8pw-o7t6K3dWrY&usqp=CAU'
  },
];

function Instructor() {
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
      <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
        <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet Our Instructor</h2>
        <p className='text-base md:text-lg text-white text-center mb-4'>Discover the talented professionals who will guide your musical journey</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  )
}

export default Instructor;