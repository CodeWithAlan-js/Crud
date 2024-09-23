import Logo from "../assets/Logo.svg";
import SearchInput from "./searchInput";

const Header = () => {
  return (
    <nav className="w-full flex justify-between border-b-2 border-[#F4A261]">
      <img src={Logo} alt="logo" className=" h-28 p-3 ml-5" />
      <SearchInput />
    </nav>
  );
};

export default Header;
