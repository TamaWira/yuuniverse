"use client";

import { ReactLenis } from "lenis/react";

type Props = {
  children: React.ReactNode;
};

export default function LenisProvider({ children }: Props) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
