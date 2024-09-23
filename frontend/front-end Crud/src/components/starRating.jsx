import { Rating } from "@material-tailwind/react";

const StarRating = ({ initialRating, onRatingChange }) => {
  const handleRating = (rate) => {
    onRatingChange(rate);
  };

  return <Rating value={initialRating} onChange={handleRating} />;
};

export default StarRating;
