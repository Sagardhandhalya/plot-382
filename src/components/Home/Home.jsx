const Home = () => {
  return (
    <>
      {/* <section
        className="hero is-fullheight-with-navbar mb-5"
        style={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      > */}
      {/* <img src="./sandip.jpeg" alt="title" style={{ marginTop: "50px" }} /> */}
      {/* <img src="./title.jpeg" alt="title" /> */}
      {/* <h1 className="tag is-warning is-size-3">પ્લોટ નં. 383</h1> */}
      {/* </section> */}
      <img src="https://firebasestorage.googleapis.com/v0/b/plot-383-bt.appspot.com/o/images%2Fposter.jpeg?alt=media&token=a9be0596-1889-416c-9f99-035e2caa1a06" alt="title" />

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
