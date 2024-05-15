import React, { useState, useEffect } from "react";
import Product from "./Product";

const images = [
  "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61P7hqIHrdL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
];
function Home() {
  const [currImage, setCurrImage] = useState(0);
  useEffect(() => {
    const intervalid = setInterval(() => {
      setCurrImage((currImage) => (currImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalid);
  }, []);
  return (
    <div className="home">
      <div className="home-componet">
        <div className="home-row">
          <Product
            id="m2"
            title="Blink Outdoor 4 (4th Gen) – Wire-free smart security camera, two-year battery life, two-way audio, HD live view, enhanced motion detection, Works with Alexa – 5 camera system"
            price={95.0}
            image="https://m.media-amazon.com/images/I/71NXowebfKL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="m3"
            title="ATPLOES 48MP Digital Cameras for Photography with Lens,
             Autofocus Vlogging Camera for YouTube,16X Zoom Anti-Shake Video Camera,
              32GB TF Card & 2 Batteries, S100"
            price={9.0}
            image="https://m.media-amazon.com/images/I/81NOWgGFruL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id="m17"
            title="Digital Camera 4K UHD Vlogging Camera, 44MP Autofocus Compact Camera with 16X Digital Zoom, Rechargeable Point and Shoot Digital Camera with 32GB SD Card, 2 Batteries for Teens Kids Boys Girls"
            price={760.0}
            image="https://m.media-amazon.com/images/I/71yvwU0EGNL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="m20"
            title="64MP Digital Cameras for Photography & Video, 40 X Zoom Vlogging Camera for YouTube with WiFi & App Control, Flash & HDMI Output, 32GB SD Card(2 Batteries)"
            price={95.0}
            image="https://m.media-amazon.com/images/I/710o1rJ4wBL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id="m6"
            title="TRAVANDO Mens Slim Wallet with Money Clip AUSTIN RFID Blocking Bifold Credit Card Holder for Men with Gift Box"
            price={29.0}
            image="https://m.media-amazon.com/images/I/71I3qOHl0wL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="m7"
            title="4K Digital Camera for Photography, 48MP Auto-Focus Vlogging Camera for YouTube, 16X Digital Zoom/ 3 180° Flip Screen/Anti Shake/Flash with SD Card, Compact HD Camera (2 Batteries & Battery Charger"
            price={30.0}
            image="https://m.media-amazon.com/images/I/81O1AdJbARL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
