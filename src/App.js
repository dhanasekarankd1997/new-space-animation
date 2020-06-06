import React from "react";
import "./styles.css";
import backimg from "../Images/stars-planets.png";
import backgrid from "../Images/planet-science-fiction-sci-fi-planet-material.png";
import spaceship from "../Images/spaceship.png";
import frame from "../Images/frame-removebg-preview.png";
import { ThemeProvider, Image, Puffs, createTheme, Arwes, Button } from "arwes";
export default function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <div
          style={
            ({ padding: 20 },
            {
              backgroundImage: `url(${backimg})`,
              backgroundRepeat: "no-repeat"
            })
          }
        >
          <div
            style={{
              backgroundImage: `url(${backgrid})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right"
            }}
          >
            {/* <div  style={{ backgroundImage: `url(${frame})` ,backgroundRepeat:'no-repeat',
    display: "flex",justifyContent:'center',alignItems: 'center'}}> */}
            {/* <Image animate resources={frame}> */}
            <div
              style={{
                backgroundImage: `url(${spaceship})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "250px",
                height: 1000,
                animation: "diagnolmove 5s infinite",
                position: "relative"
              }}
            />
            {/* </Image> */}

            <Puffs>
              <div style={{ width: "100%", height: 500 }} />
            </Puffs>
            {/* </div> */}
          </div>
        </div>
      </Arwes>
    </ThemeProvider>
  );
}
