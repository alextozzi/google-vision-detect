import React, { Fragment } from "react";
const vision = require("@google-cloud/vision");
// Creates a client
const client = new vision.ImageAnnotatorClient();

// Performs label detection on the image file

const ImageComponent = () => {
  // Creates a client

  const handleClick = () => {
    console.log(client);
    // Performs label detection on the image file
    /*
  const [result] = client.labelDetection(img);
  const labels = result.labelAnnotations;
  console.log("Labels:");
  labels.forEach(label => console.log(label.description));
    */
  };

  return (
    <Fragment>
      <img
        id="salad"
        src="https://storage.googleapis.com/tfjs-testing/tfjs-automl/object_detection/test_image.jpg"
        alt="salade"
        onClick={() => handleClick()}
      />

      <div className="dropzone center-all ">
        <div className="dropzone-text">
          Drag image file here or
          <br />
          Browse from your computer
        </div>
        <label className="dropzone-label" htmlFor="input" />
        <input type="file" id="input" hidden="" />
      </div>
    </Fragment>
  );
};

export default ImageComponent;
