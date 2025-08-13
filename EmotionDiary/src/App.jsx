import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />

      <Button
        text={"기본버튼"}
        type={""}
        onClick={() => {
          console.log("클릭됨");
        }}
      />
      <Button
        text={"긍정버튼"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("클릭됨");
        }}
      />
      <Button
        text={"부정버튼"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("클릭됨");
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
