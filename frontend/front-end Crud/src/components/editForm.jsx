import { useState } from "react";
import { Input, Textarea, Button } from "@material-tailwind/react";
import StarRating from "./starRating";
import GenreSelection from "./genreSelection";

const EditForm = ({ opinion, onSave }) => {
  const [formData, setFormData] = useState(opinion);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-full flex justify-evenly flex-col h-[500px] items-center mt-6"
    >
      <Input
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        size="md"
        label="Title"
      />
      <Input
        name="year"
        value={formData.year}
        onChange={handleInputChange}
        type="number"
        size="md"
        label="Release year"
      />
      <StarRating
        initialRating={formData.rating}
        onRatingChange={(newRating) =>
          setFormData({ ...formData, rating: newRating })
        }
      />
      <GenreSelection
        selectedGenre={formData.genre}
        setSelectedGenre={(genre) => setFormData({ ...formData, genre: genre })}
      />
      <Textarea
        name="opinion"
        value={formData.opinion}
        onChange={handleInputChange}
        variant="outlined"
        label="Your opinion"
      />
      <Button type="submit" variant="outlined" color="black">
        Save
      </Button>
    </form>
  );
};

export default EditForm;
