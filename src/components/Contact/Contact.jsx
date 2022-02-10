const Contact = () => {
  return (
    <section
      class="hero is-link is-fullheight-with-navbar"
      style={{
        background: "#3D3F95",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src="./sandip.jpeg" alt="owner" />

      <div>
        <div
          class="box has-text-warning"
          style={{
            background: "#3D3F95",
          }}
        >
          <h1 className=" is-size-3 "> રવિ ધાંધલ્યા </h1>
          <a href="tel:9870031516" className="is-size-5">
            <span className="icon mx-4">
              <i class="fa fa-phone" aria-hidden="true"></i>
            </span>
            9870031516
          </a>
          <div>
            <a href="tel:7359157200" className=" is-size-5 ">
              <span className="icon mx-4">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </span>{" "}
              7359157200
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
