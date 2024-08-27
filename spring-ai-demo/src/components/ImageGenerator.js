

import React, { useState } from "react";

function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const generateImage = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/generate-image?prompt=${prompt}`
      );
      const urls = await response.json();
      setImageUrls(urls);
    } catch (error) {
      console.log("error generating image", error);
    }
  };

  return (
    <div className="tab-content">
      <h2>Image Generator</h2>
      <input
        className="input"
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt for image here"
      ></input>

      <div>
        <button className="button" onClick={generateImage}>
          Generate Image
        </button>
      </div>

      <div className="image-grid">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Generated ${index}`}></img>
        ))}


        {[...Array(4 - imageUrls.length)].map((_, index) => (
          <div
            key={index + imageUrls.length}
            className="empty-image-slot"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageGenerator;


