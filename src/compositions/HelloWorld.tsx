import { useEffect, useState } from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const HelloWorld = () => {
  const frame = useCurrentFrame();
  const [text, setText] = useState('');

  useEffect(() => {
    const fullText = 'Hello World';
    const charsPerFrame = fullText.length / 30;
    const charIndex = Math.floor(frame * charsPerFrame);
    setText(fullText.slice(0, charIndex));
  }, [frame]);

  const opacity = interpolate(frame, [0, 10, 80, 90], [0, 1, 1, 0]);
  const scale = interpolate(frame, [0, 30], [0.8, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#1a1a2e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          fontSize: 120,
          fontWeight: 'bold',
          color: '#00d4ff',
          opacity,
          transform: `scale(${scale})`,
          textAlign: 'center',
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
