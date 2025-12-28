import React  from 'react'
import VideoClient from './VideoClient'


const VideoSection = () => {

  return (
    <section className="py-20 px-6 bg-background1 text-center"
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-tight text-balance">
          Welcome to <span className="text-headline">THE TRANQUIL</span>
        </h2>

        <p className="font-serif text-lg text-foreground/80 max-w-3xl mx-auto mb-10">
          Step into a world of architectural beauty and tranquility. Watch our exclusive villa walkthrough video and
          experience the essence of luxury living at THE TRANQUIL.
        </p>

        <VideoClient/>
      </section>
  )
}

export default VideoSection