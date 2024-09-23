import { useServerResponse } from "../context/serverContext";

const NoOpinionDisplay = () => {
  const { serverResponse } = useServerResponse();

  return (
    <>
      {serverResponse.length === 0 ? (
        <div className="flex flex-col w-full text-center items-center justify-center text-xl">
          <h1>No opinions found</h1>
          <p>Create a new opinion by clicking the "Create" button.</p>
        </div>
      ) : null}
    </>
  );
};

export default NoOpinionDisplay;
