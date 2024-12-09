import React, { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  let [list, setList] = useState("");
  let [buttonText, setButtonText] = useState("");
  let [buttonShow, setButtonShow] = useState(false);
  let [id, setId] = useState("");

  const handleSubmit = () => {
    if(id){
      axios
        .put(`http://localhost:8000/navbar/${id}`, {
          menuItems: list,
          buttonText: buttonText,
          buttonShow: buttonShow,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.error(err);
        });

    }else{
      axios
       .post("http://localhost:8000/navbar", {
          menuItems: list,
          buttonText: buttonText,
          buttonShow: buttonShow,
        })
       .then((response) => {
          console.log(response);
        })
       .catch((err) => {
          console.error(err);
        });
    }
    
  };
  let handleMenuText = (e) => {
    setList(e.target.value);
  };
  let handleButtonText = (e) => {
    setButtonText(e.target.value);
  };
  let handleButtonShow = (e) => {
    setButtonShow(e.target.checked);
  };
  let getData = () => {
    axios.get("http://localhost:8000/navItems").then((response) => {
      setList(response.data.menuItems);
      setButtonText(response.data.buttonText);
      setButtonShow(response.data.buttonShow);
      setId(response.data._id);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        Upload Details
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            File Upload
          </label>
          <input
            type="file"
            className="block w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Field 1
          </label>
          <input
            onChange={handleMenuText}
            value={list}
            type="text"
            placeholder="Menu Item"
            className="block w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Field 2
          </label>
          <input
            onChange={handleButtonText}
            value={buttonText}
            type="text"
            placeholder="button text"
            className="block w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex items-center">
          <input
            onChange={handleButtonShow}
            checked={buttonShow}
            type="checkbox"
            className="mr-2 w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
          />
          <label className="text-gray-700 font-medium">Agree to terms</label>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Navbar;
