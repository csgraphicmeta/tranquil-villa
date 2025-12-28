"use client"
import React, { useRef, useState } from 'react'

const VideoClient = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [muted, setMuted] = useState(true);
    const [unmuted, setUnmuted] = useState(false);

    const handlePlayWithSound = () => {
        setUnmuted(true);
    };
    return (
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl aspect-video relative">
            <div
                className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
                style={{ paddingTop: "56.25%" }}
            >
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={
                        unmuted
                            ? "https://www.youtube.com/embed/LvzQ69qutw8?autoplay=1&mute=0&controls=1&rel=0&showinfo=0&modestbranding=1"
                            : "https://www.youtube.com/embed/LvzQ69qutw8?autoplay=1&mute=1&loop=1&playlist=LvzQ69qutw8&controls=0&showinfo=0&rel=0&modestbranding=1"
                    }
                    title="The Tranquil Villa Walkthrough"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            {!unmuted && (
                <button
                    onClick={handlePlayWithSound}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white font-serif text-lg transition-all duration-300"
                >
                    ▶ Play with Sound
                </button>
            )}
        </div>
    )
}

export default VideoClient