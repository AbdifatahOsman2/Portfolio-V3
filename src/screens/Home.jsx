import { useEffect } from "react";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in",
    });
  }, []);

  return (
    <section className="section-one">
      <div className="container">
        <h1>Welcome to Abdifatah's Cra Template</h1>
      </div>
    </section>
  );
};

export default Home;
