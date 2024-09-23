import { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";
import { MdSearch } from "react-icons/md";
import { useServerResponse } from "../context/serverContext";
import axios from "axios";

const SearchInput = () => {
  const { serverResponse, setServerResponse } = useServerResponse();
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    setOriginalData(serverResponse);
  }, [serverResponse]);

  const handleSearch = async (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      try {
        const response = await axios.get("http://localhost:3000/get-moovies");
        setServerResponse(response.data);
        setOriginalData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
      return;
    }
    const filteredData = originalData.filter((data) => {
      return data.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setServerResponse(filteredData);
  };

  return (
    <div className="flex justify-center m-10">
      <Input
        onChange={handleSearch}
        size="lg"
        label="Search for a film"
        icon={<MdSearch className="text-[#E76F51] text-3xl" />}
      />
    </div>
  );
};

export default SearchInput;
