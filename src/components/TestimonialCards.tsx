'use client';
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const MusicWebTestimonial = [
    {
        quote: "The expert-led guitar courses are not only comprehensive but incredibly engaging. I went from struggling with basic chords to confidently playing my favorite songs. The community here is so supportive, and the interactive lessons make practice feel like a personal concert every time. Harmony Haven is a haven indeed for anyone looking to dive deep into the world of music. It's not just learning; it's an experience!",
        name: "Sarah Thompson",
        title: "Guitar Enthusiast",
    },
    {
        quote: "As someone who always wanted to learn piano but felt intimidated by the complexity, Harmony Haven was a game-changer. The step-by-step lessons made everything clear and approachable. From scales to my first complete piece, I felt supported every step of the way. The progress tracking is fantastic, allowing me to see my improvement over time. Harmony Haven truly turns dreams into reality.",
        name: "Michael Rivera",
        title: "Piano Prodigy",
    },
    {
        quote: "Learning the violin seemed like a distant dream until I found Harmony Haven. The detailed video tutorials and real-time feedback have been invaluable. My instructor's passion is contagious, and the personalized learning path kept me motivated. I can now play classical pieces I never thought possible. Harmony Haven brings the joy of music to life!",
        name: "Emily Chen",
        title: "Violin Virtuoso",
    },
    {
        quote: "The vocal exercises and breathing techniques taught by professional instructors have significantly improved my range and control. The tips on stage performance were particularly helpful for my confidence. The supportive community and regular feedback have made me feel like a true vocalist. Harmony Haven is the ultimate destination for anyone serious about singing.",
        name: "Olivia Martinez",
        title: "Vocal Excellence",
    },
    {
        quote: "Harmony Haven's drum lessons are phenomenal! The structured approach and hands-on practice sessions helped me master complex beats in no time. The instructors break down each technique in a way that's easy to understand, making even the toughest rhythms feel achievable. The interactive lessons make it feel like I'm jamming with a live band. It's the best investment I've made in my musical journey.",
        name: "Jason Lee",
        title: "Drum Dynamics",
    },
    {
        quote: "Discovering Harmony Haven was a turning point in my flute learning journey. The expertly crafted lessons made complex techniques feel manageable and enjoyable. From mastering breath control to playing intricate melodies, the step-by-step guidance was invaluable. The interactive exercises and instant feedback kept me motivated and on track. Harmony Haven is a magical place for anyone wanting to learn the flute, providing the perfect blend of challenge and support.",
        name: "Isabella Gomez",
        title: "Flute Fantasia",
    },
]

function MusicWebTestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-white text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
        items={MusicWebTestimonial}
        direction="right"
        speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicWebTestimonialCards;