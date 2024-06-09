'use client';
import React from 'react'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebnars() {

    const featuredWebinars = [
        {   
            Title: "Understanding Music Theory: The Foundation of Musical Mastery",
            Description: "Deep Dive into the world of music theory with this essential webinar. Learn about scales, chords, key signatures, and the structural elements that form the backbone of music. This session is perfect for musicians of all levels who want to deepen their understanding and enhance their ability to read, write, and create music.",
            Slug: "understanding-music-theory",
            isFeatured: true,
        },
        {  
            Title: "The Art of Songwriting: Crafting Memorable Melodies and Lyrics",
            Description:"Unlock your creativity and learn the secrets of successful songwriting. This webinar covers the fundamentals of melody, harmony, and lyrical composition. Discover techniques for writing catchy hooks, developing song structures, and expressing your emotions through music. Ideal for aspiring songwriters and musicians looking to improve their compositional skills.",
            Slug: "art-of-songwriting",
            isFeatured: true,  
        },
        {  
            Title: "Music Production Basics: From Home Studio to Hit Songs" ,
            Description: "Take your music from concept to creation with this comprehensive webinar on music production. Explore the essentials of setting up a home studio, recording techniques, and using digital audio workstations (DAWs). Learn how to mix and master tracks to produce professional-quality music. Perfect for musicians and producers at any level.",
            Slug: "music-production-basics",
            isFeatured: true,
        },
        {    
            Title: "Jazz Improvisation: Techniques and Strategies for Creative Expression" ,
            Description: "Dive into the exciting world of jazz improvisation. This webinar covers scales, modes, and chord progressions essential for improvisation. Learn strategies for developing your unique voice and spontaneous creativity in jazz. Suitable for all instrumentalists and vocalists interested in enhancing their improvisational skills.",
            Slug: "jazz-improvisation-techniques",
            isFeatured: true,
        },
        {   
            Title: "Conducting 101: Leading with Confidence and Clarity" ,
            Description: "Step into the role of a conductor with this introductory webinar. Learn the basics of conducting techniques, score reading, and rehearsal strategies. Gain insights into effectively leading ensembles and communicating musical ideas. Perfect for aspiring conductors and musicians interested in leadership roles.",
            Slug: "conducting-101", 
            isFeatured: true,
        },
        {
            Title: "Flute Mastery: Breath Control and Musical Expression",
            Description: "Master the flute with our specialized webinar focusing on breath control and musical expression. Learn how to produce a beautiful tone, tackle challenging pieces, and perform with emotion and precision. This webinar is perfect for flutists seeking to improve their technical skills and artistic expression.",
            Slug: "flute-mastery-breath-control",
            isFeatured: true,
        },
        {
            Title: "Vocal Excellence: Techniques for Powerful Performances",
            Description: "Unlock the potential of your voice with this engaging webinar. Focus on vocal techniques, breathing exercises, and stage presence to deliver powerful performances. Ideal for singers of all levels, this session will help you develop control, confidence, and expressiveness in your singing.",
            Slug: "vocal-excellence-techniques",
            isFeatured: true,
        },
        {
            Title: "Drumming Dynamics: Rhythm, Techniques, and Performance",
            Description: "Dive into the world of drumming with our dynamic webinar. Learn essential rhythms, explore various drumming techniques, and discover how to deliver powerful performances. This session is ideal for drummers looking to enhance their skills, from beginners to advanced players.",
            Slug: "drumming-dynamics-rhythm-techniques",
            isFeatured: true,
        },
        {
            Title: "Violin Virtuosity: Techniques for Precision and Expression",
            Description: "Enhance your violin playing with expert insights into achieving precision and expression. This webinar covers bowing techniques, finger placement, and musical interpretation. Gain the skills needed to perform with clarity and emotion, and take your violin playing to new heights.",
            Slug: "violin-virtuosity-techniques",
            isFeatured: true,
        },
    ];
  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
        <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
        <p className='text-white mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl'>Enhance Your Musical Journey</p>
    </div>
    <div className='mt-10'>
        <HoverEffect items={featuredWebinars.map(webinar => (
            {
                title: webinar.Title,
                description: webinar.Description,
                link: '/'
            }
        ))} />
    </div>
    <div className='mt-10 text-center'>
       <Link href={"/"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-150 transition duration-200'>View All Webinars</Link></div>
    </div>
    </div>
  )
}

export default UpcomingWebnars;