import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import GooglePhotos from '../assets/googlephotos.svg';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UploadComponent() {
  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    setImages([...images, ...uploadedImages]);

    // Simulate upload progress (for demonstration)
    simulateUploadProgress(uploadedImages.length);
  };

  // const simulateUploadProgress = (totalImages) => {
  const simulateUploadProgress = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress((prevProgress) => Math.min(prevProgress + 10, 100));
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 200); // Adjust speed of progress here
  };

  const handleDownload = () => {
    // Logic for downloading images or processing them
  };

  const handleLocalUpload = () => {
    document.getElementById("imageUpload").click();
  };

  const handleGoogleDriveUpload = () => {
    // Logic for handling Google Drive uploads
    alert("Google Drive upload clicked! Implement the logic here.");
  };

  const handlePhotosUpload = () => {
    // Logic for handling Photos uploads
    alert("Photos upload clicked! Implement the logic here.");
  };

  return (
    <div className="min-h-screen text-white flex flex-col">
      <Header></Header>

      {/* Upload Section */}
      <div className="flex-grow flex flex-col p-5 items-center justify-center space-y-6">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-4">
            {/* Buttons for different upload sources */}
            <button
              onClick={handleLocalUpload}
              className="bg-purple-800 p-4 rounded-full focus:outline-none hover:bg-purple-700"
            >
              <FontAwesomeIcon
                icon={faFolder}
                className="text-white text-2xl"
              />
            </button>
            <button
              onClick={handleGoogleDriveUpload}
              className="bg-purple-800 p-4 rounded-full focus:outline-none hover:bg-purple-700"
            >
              <img className="text-white text-2xl" style={{ filter: "invert(1)" }} src={GooglePhotos} />
                
            </button>
            <button
              onClick={handlePhotosUpload}
              className="bg-purple-800 p-4 rounded-full focus:outline-none hover:bg-purple-700"
            >
              <FontAwesomeIcon
                icon={faGoogleDrive}
                className="text-white text-2xl"
              />
            </button>
          </div>
          <h1 className="text-4xl font-bold text-pink-500">Upload Images</h1>
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="hidden"
            id="imageUpload"
          />
          <div className="mt-6 flex space-x-4 ml-2">
            <label
              htmlFor="imageUpload"
              className="bg-gray-800 text-white p-2 rounded-full outline-none cursor-pointer"
            >
              Zip File Name
            </label>
            <button
              onClick={handleDownload}
              className="bg-red-700 px-4 py-2 rounded-full"
            >
              Download
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-2/3 h-2 bg-gray-800 rounded-full mt-6">
          <div
            className="h-full bg-pink-500 rounded-full"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-4 gap-4 mt-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-gray-800 h-32 flex items-center justify-center rounded-lg"
            >
              <img
                src={URL.createObjectURL(image)}
                alt={`Uploaded ${index + 1}`}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
