
export function ErrorFallback({ error }) {
    return (
      <div>
        <h2>Something went wrong:</h2>
        <p>{error.message}</p>
      </div>
    );
  }