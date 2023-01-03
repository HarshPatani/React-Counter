import "./App.css";
import useLocalStorage from "use-local-storage";

function App() {
  const [count, setCount] = useLocalStorage("count", 0);

  return (
    <main>
      <h1>Counter</h1>
      <div className="content">
        <button
          onClick={() => {
            setCount((prevValue) => {
              return --prevValue;
            });
          }}
        >
          -
        </button>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount((prevValue) => {
              return ++prevValue;
            });
          }}
        >
          +
        </button>
      </div>
    </main>
  );
}

export default App;
