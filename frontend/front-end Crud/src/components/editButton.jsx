import { MdModeEditOutline } from "react-icons/md";

const EditButton = ({ id, onEditToggle }) => {
  const handleEdit = () => {
    onEditToggle(id);
  };

  return (
    <div className="absolute top-3 left-3">
      <button onClick={handleEdit}>
        <MdModeEditOutline className="text-[#E76F51] text-3xl cursor-pointer hover:text-black transition-all" />
      </button>
    </div>
  );
};

export default EditButton;
