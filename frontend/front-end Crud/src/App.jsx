import EditPage from "./views/editPage";
import { ServerResponseProvider } from "./context/serverContext";
import { CloseProvider } from "./context/closeContext";

function App() {
  return (
    <ServerResponseProvider>
      <CloseProvider>
        <EditPage />
      </CloseProvider>
    </ServerResponseProvider>
  );
}

export default App;
