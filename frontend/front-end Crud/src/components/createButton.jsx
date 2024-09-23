import { Button } from "@material-tailwind/react";
import { useClose } from "../context/closeContext";

const CreateButton = () => {
  const { toggleClose } = useClose();

  return (
    <div className="flex justify-center m-10">
      <Button
        className=" hover:text-[#E76F51]  hover:border-[#E76F51]"
        variant="outlined"
        onClick={toggleClose}
      >
        Create an opinion
      </Button>
    </div>
  );
};

export default CreateButton;
