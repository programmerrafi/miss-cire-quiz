"use client";
import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function Player({ videoUrl, locked = false }) {
  // console.log("videoUrl: ", videoUrl);
  const videoRef = React.useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const [aspectRatio, setAspectRatio] = React.useState(0);
  const [showPlayButton, setShowPlayButton] = React.useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    setShowPlayButton(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
    setShowPlayButton(false);
  };

  const handleVideoClick = () => {
    // if (isVideoPlaying) {
    //   videoRef.current.pause();
    // } else {
    //   videoRef.current.play();
    // }
  };

  const handlePlay = (e) => {
    e.stopPropagation();
    // setOpenModal(false);
    // videoRef.current?.play();
    setIsPlaying(true);
    setShowPlayButton(true);
  };
  const handlePause = (e) => {
    // setShouldStopPropagation(true);
    // setOpenModal(false);
    setIsPlaying(false);
    setShowPlayButton(false);
  };

  return (
    <div className={`w-full h-auto relative player-wrapper`}>
      {/* <video
        className="object-cover w-full h-auto"
        ref={videoRef}
        controls={isVideoPlaying ? true : false}
        // controls
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        onClick={handleVideoClick}
        onLoadedMetadata={() => {
          const width = videoRef.current.videoWidth;
          const height = videoRef.current.videoHeight;
          const ratio = width / height;
          // console.log("ratio: ", ratio);
          // setAspectRatio(ratio);
        }}
      >
        <source src={`${videoUrl}`} type="video/mp4" />
      </video> */}

      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        controls={isPlaying ? true : false}
        playing={isPlaying}
        onPause={(e) => handlePause(e)}
        // onReady={() => setLoading(false)}
      />

      {!showPlayButton && (
        <div
          className="button_hover_play cursor-pointer"
          onClick={(e) => handlePlay(e)}
        >
          <button
            role="button"
            aria-label="play-button"
            className="play-button w-[42px] h-[39px] flex justify-center items-center outline-none border-none rounded-2xl"
          ></button>
          <BsFillPlayFill
            size={24}
            className="ml-[1px] absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[92] text-[#f0b7cf]"
          />
        </div>
      )}
    </div>
  );
}

export default Player;
