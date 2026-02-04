import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, speed = 100, pause = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timer;

    if (isDeleting) {
      if (currentIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (currentIndex < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        }, speed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pause);
      }
    }

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textIndex, texts, speed, pause]);

  return (
    <span className="inline-block min-h-[1.2em]">
      {displayText}
      <span className="animate-pulse text-action">|</span>
    </span>
  );
};

export default Typewriter;
