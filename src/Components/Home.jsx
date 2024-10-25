import React, { useEffect, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import "./Home.css";

function Home() {
  const audioRef = useRef(null);

  // Pemutaran audio setelah halaman dimuat
  useEffect(() => {
    if (audioRef.current) {
      // Mencoba untuk memutar audio
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked. User interaction is needed to play audio.");
      });
    }
  }, []);

  return (
    <section id="home" className="home-section section">
      <h2>
        <ReactTypingEffect
          text={["Hellow Sayang", "Welcome to Liyu!!"]}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={1000}
          cursor="|"
          displayTextRenderer={(text, i) => {
            return <span>{text}</span>;
          }}
          loop={false}
        />
      </h2>
      <p>I Hope Kamu Suka Dengan Isinya ❤❤❤💟</p>

      {/* Audio element with autoplay */}
      <audio ref={audioRef} controls style={{ display: 'none' }}>
        <source src="songs.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}

export default Home;
