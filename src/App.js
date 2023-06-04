import { ErrorBoundary } from "react-error-boundary";
import Main from "./Component/Main";
import SimplePopper from "./Component/Popper";

function App() {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <ErrorBoundary fallback={<div>Something went wrong</div>}
      onError={(error)=> console.log(error)}>
        <SimplePopper />
      </ErrorBoundary>
    </div>
  );
}

export default App