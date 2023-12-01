import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <header>
          <nav>
            <img src="assets/images/logo-light.svg" alt="" className="logo" />
            <a href="#">Apply for access</a>
          </nav>
          <h1>Data tailored to your needs.</h1>
          <button>Learn more</button>
        </header>
        <main>
          <div className="about">
            <div className="info">
              <div className="info-number">1</div>
              <h3 className="info-heading">Actionable insights</h3>
              <p className="info-text">
                Optimize your products, improve customer satisfaction and stay
                ahead of the competition with our product data analytics.
              </p>
            </div>
            <div className="info">
              <div className="info-number">2</div>
              <h3 className="info-heading">Data-driven decisions</h3>
              <p className="info-text">
                Make data-driven decisions with our product data analytics. Our
                AI-generated reports help you unlock insights hidden in your
                product data.
              </p>
            </div>
            <div className="info">
              <div className="info-number">3</div>
              <h3 className="info-heading">Always affordable</h3>
              <p className="info-text">
                Always affordable pricing that scales with your business. Get
                top-quality product data analytics services without hidden costs
                or unexpected fees.
              </p>
            </div>
          </div>
          <div className="test">
            <h2>Be the first to test</h2>
            <p>
              Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for our app and kickstart your
              company. Apply for access below and I’ll be in touch to schedule a
              call.
            </p>
            <button>Apply for access</button>
          </div>
        </main>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
