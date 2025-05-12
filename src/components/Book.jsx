import React from 'react';
import HTMLFlipBook from "react-pageflip";

function Book() {
  return (
    <>
    {/* Background music */}
    <audio audio autoPlay loop ref={(audio) => { if (audio) audio.volume = 0.3; }}>
      <source src="/audio/Lana Del Rey - Young and Beautiful.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <HTMLFlipBook 
      width={370} 
      height={500}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size='fixed'
    >
      {/* Cover Page */}
      <div className="page" style={{ background: 'transparent' }}>
        <div className="page-content cover">
          <h1 className="diary-title">Our Love Journey</h1>
          <p className="diary-subtitle">A Story of Us</p>
        </div>
      </div>

      {/* Diary Page 1 */}
      <div className="page">
        <div className="page-content diary-page">
          <p className="diary-entry">
            It’s been five months since we started this journey together.<br />
            I still remember when we first met on a dating app — who would've thought?<br /><br />

            We laughed over the difference between a screwdriver and pliers,<br />
            neither of us backing down, even over something so random.<br /><br />

            The first time I heard your voice,<br />
            it felt like a lullaby — calm, soft, like velvet in a storm.<br /><br />

            On our first date, I froze when I saw you —<br />
            the way you walked, the way you spoke,<br />
            you held my hand after we got off the bike, and we watched a horror movie.<br />
            You jumped and hugged me out of fear, but I secretly loved it.<br /><br />

            I can still recall your scent —<br />
            the fragrance of your hair, of your skin —<br />
            addictive, like nothing I've known before.
          </p>
        </div>
      </div>

      {/* Diary Page 2 */}
      <div className="page">
        <div className="page-content diary-page">
          <p className="diary-entry">
            We played arcade games at the mall, and before the night ended,<br />
            I confessed that I liked you — nervous, yes, but sincere.<br />
            I once said I only wanted friendship, yet here we are.<br /><br />

            Our second date was cozy: PlayStation, The Conjuring, singing together,<br />
            even meeting my friends at a cafe. We had our first fight too.<br />
            We cried it out in front of your house and hugged it away.<br /><br />

            We've shared joys and tears, kisses and comfort,<br />
            and I still remember our first spontaneous kiss —<br />
            magical, unforgettable, mine forever.<br /><br />

            We've visited zoos, watched movies, karaoke nights,<br />
            and lazy days at home — every moment, enough for me.<br /><br />

            I want to spend all my days with you.<br />
            Even if storms come, I believe we can face them — together.
          </p>
          <div className="signature">~ Abil</div>
        </div>
      </div>

      {/* Photo Pages */}
      {[
        { src: "images/img-1.jpg", caption: "Our first photo together — I still remember how nervous we were ❤️" },
        { src: "images/img-2.jpg", caption: "The way you smile makes my day every time ✨" },
        { src: "images/img-3.jpg", caption: "Just another memory of us laughing until it hurt 🤍" },
        { src: "images/img-4.jpg", caption: "Karaoke night — our voices, off-key but full of love 🎤" },
        { src: "images/img-5.jpg", caption: "I don't need fancy places, just you beside me 🧡" },
      ].map((photo, index) => (
        <div className="page" key={index}>
          <div className="page-content photo-page">
            <div className="polaroid">
              <img src={photo.src} alt={`Memory ${index + 1}`} />
              <small>{photo.caption}</small>
            </div>
          </div>
        </div>
      ))}
    </HTMLFlipBook>
    </>
  );
}

export default Book;
