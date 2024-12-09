import axios from "axios";
import React, { useEffect, useState } from "react";

const Banner = () => {
  let [subtitle, setSubtitle] = useState("");
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [buttonText, setButtonText] = useState("");
  let [id, setId] = useState("");

  let handleSubtitle = (e) => {
    setSubtitle(e.target.value);
  };
  let handleTitle = (e) => {
    setTitle(e.target.value);
  };
  let handleDescription = (e) => {
    setDescription(e.target.value);
  };
  let handleButtonText = (e) => {
    setButtonText(e.target.value);
  };
  let handleSubmitBanner = () => {
    if (id) {
      axios
        .put(`http://localhost:8000/banner/${id}`, {
          subTitle: subtitle,
          title: title,
          description: description,
          buttonText: buttonText,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      axios
        .post("http://localhost:8000/banner", {
          subTitle: subtitle,
          title: title,
          description: description,
          buttonText: buttonText,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  let getData = () => {
    axios.get("http://localhost:8000/bannerItem").then((response) => {
      console.log(response.data);
      setSubtitle(response.data.subtitle);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setButtonText(response.data.buttonText);
      setId(response.data._id);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Edit Banner Section</h2>
      <div className="space-y-4">
        {/* Subtitle */}
        <div>
          <label className="block font-medium mb-2">Subtitle</label>
          <input
            onChange={handleSubtitle}
            value={subtitle}
            type="text"
            name="subtitle"
            placeholder="e.g., I AM DESIGNER"
            className="w-full p-3 border rounded-md focus:ring focus:outline-none"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block font-medium mb-2">Title</label>
          <input
            onChange={handleTitle}
            value={title}
            type="text"
            name="title"
            placeholder="e.g., Creative Design and Web Solutions"
            className="w-full p-3 border rounded-md focus:ring focus:outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-2">Description</label>
          <textarea
            onChange={handleDescription}
            value={description}
            name="description"
            rows="4"
            placeholder="Write a brief description"
            className="w-full p-3 border rounded-md focus:ring focus:outline-none"
          />
        </div>

        {/* Button Text */}
        <div>
          <label className="block font-medium mb-2">Button Text</label>
          <input
            onChange={handleButtonText}
            value={buttonText}
            type="text"
            name="buttonText"
            placeholder="e.g., Download My CV"
            className="w-full p-3 border rounded-md focus:ring focus:outline-none"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-2">Banner Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 border rounded-md"
          />
        </div>
        {/* Submit Button */}
        <div className="text-right">
          <button
          type="button"
            onClick={handleSubmitBanner}
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
