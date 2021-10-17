import React from "react";
import Particles from "react-particles-js";
function MyParticle() {
  return (
    <div>
      <Particles
        className="fixed h-full"
        params={{
          particles: {
            number: {
              value: 120,
              density: {
                enable: true,
                value_area: 1200,
              },
            },
            color: {
              value: "#636e72",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
              },
              polygon: {
                nb_sides: 6,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              opacity: 1.5,
              width: 1,
              shadow: {
                enable: true,
                color: "#e74c3c",
                blur: 5,
              },
            },
            move: {
              enable: true,
              random: true,
              speed: 3,
              attract: {
                rotateX: 600,
                rotateY: 1200,
              },
            },
            size: {
              value: 6,
              random: true,
              anim: {
                speed: 40,
                size_min: 0.1,
              },
            },
            opacity: {
              value: 0.8,
              anim: {
                speed: 1,
                opacity_min: 0.1,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default MyParticle;
