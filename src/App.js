import { useSelector, useDispatch } from "react-redux";
import { fetchText } from "./redux/texts/textsSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.texts.text);
  const [paragraph, setParagraph] = useState(0);

  const handleSubmit = () => {
    dispatch(fetchText(paragraph));
  };

  return (
    <>
      <div>
        <header>
          <h1>Lorem Text Generator App</h1>
        </header>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div>
            <label>Paragraphs</label>
            <input
              style={{ width: "60px", marginLeft: "10px" }}
              type="number"
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
            />
            <button style={{ marginLeft: "10px" }} onClick={handleSubmit}>
              Generate
            </button>
          </div>
        </nav>
        <div>
          <p style={{ border: "1px solid black", padding: "10px" }}>{text}</p>
        </div>
      </div>
    </>
  );
}

export default App;
