import Header from "../components/header";
import CardEditor from "../components/cardEditor";
import CreateButton from "../components/createButton";
import { useClose } from "../context/closeContext";
import OpinionCards from "../components/opinionCards";
import NoOpinionDisplay from "../components/noOpinionDisplay";

const EditPage = () => {
  const { isClose } = useClose();

  return (
    <>
      <Header />
      <OpinionCards />
      {!isClose ? (
        <>
          <NoOpinionDisplay />
          <CreateButton />
        </>
      ) : (
        <CardEditor />
      )}
    </>
  );
};

export default EditPage;
