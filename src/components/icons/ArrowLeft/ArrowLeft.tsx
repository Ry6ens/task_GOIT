import React from "react";

interface Props {
  width: string;
  height: string;
}

export default function ArrowLeft({ width, height }: Props) {
  return (
    <svg viewBox="0 0 32 32" width={width} height={height} fill="#9e89d1">
      <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"></path>
      <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"></path>
    </svg>
  );
}
