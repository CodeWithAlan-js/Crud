// OpinionCards.jsx

import { useState } from "react";
import axios from "axios";
import { capitalizeFirstLetter } from "../utils/helpers.js";
import { useServerResponse } from "../context/serverContext.jsx";
import DeleteButton from "./deleteButton.jsx";
import EditButton from "./editButton.jsx";
import EditForm from "./editForm.jsx";

const OpinionCards = () => {
  const { setServerResponse, serverResponse } = useServerResponse();
  const [editingId, setEditingId] = useState(null);

  const handleEditToggle = (id) => {
    setEditingId(id === editingId ? null : id);
  };

  const handleSave = async (id, updatedOpinion) => {
    try {
      await axios.patch(
        `http://localhost:3000/update-moovie/${id}`,
        updatedOpinion
      );
      const response = await axios.get("http://localhost:3000/get-moovies");
      setServerResponse(response.data);
      setEditingId(null);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-screen">
      <ul className="w-full  flex flex-wrap justify-center items-center mt-14">
        {serverResponse.map((opinion) => (
          <li
            key={opinion._id}
            className="relative border border-[#E76F51] flex flex-col justify-evenly items-center rounded-lg w-80 min-h-80  p-4 m-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          >
            <DeleteButton id={opinion._id} />
            <EditButton id={opinion._id} onEditToggle={handleEditToggle} />
            {editingId === opinion._id ? (
              <EditForm
                opinion={opinion}
                onSave={(updatedOpinion) =>
                  handleSave(opinion._id, updatedOpinion)
                }
              />
            ) : (
              <>
                <p>Title : {capitalizeFirstLetter(opinion.title)}</p>
                <p>Release year : {opinion.year}</p>
                <p>Genre : {capitalizeFirstLetter(opinion.genre)}</p>
                <p>Note : {opinion.rating} / 5</p>
                <p>Opinion : {capitalizeFirstLetter(opinion.opinion)}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpinionCards;
