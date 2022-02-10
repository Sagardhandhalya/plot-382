const Home = () => {
  return (
    <>
      <section
        class="hero is-link is-fullheight-with-navbar mb-5"
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
      <div class="tile is-ancestor has-text-centered">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">મેરિન પ્લાય</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">સન પ્લાય</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">સ્ક્રીન ડોર</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">ફલેશ ડોર</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">બ્લેક બોર્ડ</p>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
