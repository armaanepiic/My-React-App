import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
