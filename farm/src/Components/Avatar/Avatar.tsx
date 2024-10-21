import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, className }) => {
  return (
    <div className={`flex   items-center justify-center ${className}`}>
      <img src={src} alt={alt} className="w-12 ring-2 ring-red-500  h-12 rounded-full" />

    </div>
  );
};

export default Avatar;