'use client';
import React from 'react';
import { PinContainer } from './3d-pin';

export function AnimatedPinWithLines() {
  return (
    <div className="relative h-[300px] w-full flex items-center justify-center pt-24">
      {/* Central Pin */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <PinContainer
          title="Leave us a Review on Google"
          href="https://www.google.com/maps/place/TAMERDigital/@25.9437414,-80.2976751,1672m/data=!3m2!1e3!4b1!4m6!3m5!1s0xac2f005d1eb885a5:0x21d75ef84ccb829f!8m2!3d25.9437414!4d-80.2976751!16s%2Fg%2F11vpdt7f8m?hl=en&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
        >
          <div className="flex items-center justify-center w-[10rem] h-[10rem] bg-transparent -translate-y-10 -translate-x-[1px]">
            {/* Removed MapPin icon div */}
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
