import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 id="title">가위 바위 보!</h1>
    <button class="hand">가위</button>
    <button class="hand">바위</button>
    <button class="hand">보</button>
  </div>
);
