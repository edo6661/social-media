import useTitle from "./hooks/useTitle";
import { Outlet } from "react-router-dom";
import Header from "./components/general/Header";
import Footer from "./components/general/Footer";
function App() {
  useTitle("Home");
  return (
    <>
      {/* <HeaderDika /> */}
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
