import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { useServerResponse } from "../context/serverContext";

const DeleteButton = ({ id }) => {
  const { setServerResponse } = useServerResponse();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/delete-moovie/${id}`);
      const response = await axios.get("http://localhost:3000/get-moovies");
      setServerResponse(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="absolute top-3 right-3">
      <button onClick={handleDelete}>
        <MdDeleteForever className="text-[#E76F51] text-3xl cursor-pointer hover:text-black transition-all" />
      </button>
    </div>
  );
};

export default DeleteButton;
