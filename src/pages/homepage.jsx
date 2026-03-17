import "./homepage.css";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <div className="home">

      <Navbar />

      <section className="hero">
        <h1>Financial Intelligence Powered by AI</h1>

        <p>
          Kautrix analyzes real-time market news and sentiment to deliver
          powerful insights.
        </p>

        <button className="cta-btn">Get Started</button>
      </section>

    </div>
  );
}

export default Homepage;