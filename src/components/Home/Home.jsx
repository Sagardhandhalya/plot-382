const Home = () => {
  return (
    <>
      <section
        className="hero is-link is-fullheight-with-navbar mb-5"
        style={{
          background: "#3D3F95",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="./ship.png" alt="title" />
        <img src="./title.jpeg" alt="title" />
        <h1 className="tag is-warning is-size-3">પ્લોટ નં. 383</h1>
      </section>
      <div className="tile is-ancestor has-text-centered">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">મેરિન પ્લાય</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">સન પ્લાય</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">સ્ક્રીન ડોર</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">ફલેશ ડોર</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">બ્લેક બોર્ડ</p>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
