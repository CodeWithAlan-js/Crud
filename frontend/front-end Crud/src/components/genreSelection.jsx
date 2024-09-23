import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";

const GenreSelection = ({ setSelectedGenre }) => {
  const handleGenreSelectionLocal = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      <Menu>
        <MenuHandler className="flex justify-center">
          <Button>Genre</Button>
        </MenuHandler>
        <MenuList className="max-h-80 overflow-y-auto flex flex-col items-center">
          <MenuItem onClick={() => handleGenreSelectionLocal("Action")}>
            <Checkbox />
            Action
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("Comedy")}>
            <Checkbox />
            Comedy
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("Drame")}>
            <Checkbox />
            Drama
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("Horror")}>
            <Checkbox />
            Horror
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("Romance")}>
            <Checkbox />
            Romance
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("Adventure")}>
            <Checkbox />
            Adventure
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("Animation")}>
            <Checkbox />
            Animation
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("Crime")}>
            <Checkbox />
            Crime
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("Documentary")}>
            <Checkbox />
            Documentary
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("Family")}>
            <Checkbox />
            Family
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("Fantasy")}>
            <Checkbox />
            Fantasy
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("Mystery")}>
            <Checkbox />
            Mystery
          </MenuItem>
          <MenuItem
            onClick={() => handleGenreSelectionLocal("Science Fiction")}
          >
            <Checkbox />
            Science Fiction
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("Thriller")}>
            <Checkbox />
            Thriller
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("War")}>
            <Checkbox />
            War
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("Western")}>
            <Checkbox />
            Western
          </MenuItem>
          <MenuItem onClick={() => handleGenreSelectionLocal("Other")}>
            <Checkbox />
            Other
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default GenreSelection;
