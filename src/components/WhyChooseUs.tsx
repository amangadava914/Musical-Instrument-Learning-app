'use client';
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicWebContent = [
  {
    title: "Expert-Led Courses",
    description:
      "Learn from professional musicians and certified instructors who bring years of experience and passion to every lesson. Our courses cover a wide range of instruments, including piano, guitar, violin, drums, and more.",
  },
  {
    title: "Diverse Music Genres",
    description:
      "Explore various music styles, from classical and jazz to rock and electronic. Our diverse curriculum ensures you can pursue the genre that resonates with you.",
  },
  {
    title: "Interactive Lessons",
    description:
      "Engage in interactive video lessons that combine traditional teaching methods with modern technology. Practice with guided tutorials, real-time feedback, and personalized learning paths.",
  },
  {
    title: "Flexible Learning",
    description:
      "Access our resources anytime, anywhere. With on-demand video lessons, downloadable materials, and mobile-friendly content, you can learn at your own pace and convenience."
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your growth with our advanced tracking tools. Set goals, track your progress, and celebrate your achievements with personalized milestones."
  },
  {
    title: "Community and Support",
    description:
      "Join a vibrant community of music enthusiasts. Share your progress, collaborate with peers, and receive support and motivation from fellow learners and instructors."
  },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicWebContent} />
    </div>
  )
}

export default WhyChooseUs;