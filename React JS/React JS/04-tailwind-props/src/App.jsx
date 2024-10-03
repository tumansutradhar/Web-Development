import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-gray-800 p-5 rounded-xl mb-5">Tailwind CSS</h1>
      <Card headline="Your Custom Headline" />
      <Card headline="Another Headline" />
      <Card headline="Third Headline" />
    </>
  );
}

export default App;
