import { useState } from "react";
import { Input, Textarea, Button } from "@material-tailwind/react";
import StarRating from "./starRating";
import GenreSelection from "./genreSelection";
import axios from "axios";
import { useServerResponse } from "../context/serverContext";
import { IoMdClose } from "react-icons/io";
import { useClose } from "../context/closeContext";
import { currentYear, getMinYear } from "../utils/helpers.js";

const Form = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const { setServerResponse } = useServerResponse();
  const { toggleClose } = useClose();

  const handleGenreSelection = (genre) => {
    setSelectedGenre(genre);
  };

  const [formData, setFormData] = useState({
    title: "",
    year: getMinYear(),
    rating: 0,
    genre: selectedGenre,
    opinion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedGenre) return alert("Please select a genre");
    try {
      const updatedFormData = { ...formData, genre: selectedGenre };
      await axios.post("http://localhost:3000/add-moovie", updatedFormData);
      const response = await axios.get("http://localhost:3000/get-moovies");
      setServerResponse(response.data);
      setFormData({
        title: "",
        year: getMinYear(),
        rating: 0,
        genre: "",
        opinion: "",
      });
      toggleClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-96 h-[500px] m-10 border-2 border-[#E76F51] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-center"
    >
      <div className=" w-full absolute left-2 top-2">
        <IoMdClose
          onClick={toggleClose}
          className="text-[#E76F51] text-3xl cursor-pointer hover:text-black"
        />
      </div>
      <div className="max-w-full flex justify-evenly flex-col h-full items-center mt-5">
        <Input
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          size="md"
          label="Movie title"
          required
        />
        <Input
          name="year"
          value={formData.year}
          onChange={handleInputChange}
          type="number"
          size="md"
          min={getMinYear()}
          max={currentYear()}
          label={`Release year ${getMinYear()} - ${currentYear()}`}
          required
        />
        <StarRating
          initialRating={formData.rating}
          onRatingChange={(newRating) =>
            setFormData({ ...formData, rating: newRating })
          }
        />
        <GenreSelection
          selectedGenre={selectedGenre}
          setSelectedGenre={handleGenreSelection}
        />
        {selectedGenre}
        <Textarea
          name="opinion"
          value={formData.opinion}
          onChange={handleInputChange}
          variant="outlined"
          label="Your opinion"
          required
        />
        <Button type="submit" variant="outlined" color="black">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
