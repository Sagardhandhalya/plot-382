const Footer = () => {
  return (
    <footer class="footer has-text-left">
      <h1 className=" is-size-5"> રવિ ધાંધલ્યા </h1>
      <a href="tel:9870031516" className="is-size-6">
        <span className="icon mx-4">
          <i class="fa fa-phone" aria-hidden="true"></i>
        </span>
        9870031516
      </a>
      <div>
        <a href="tel:7359157200" className=" is-size-6">
          <span className="icon mx-4">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </span>{" "}
          7359157200
        </a>
      </div>
      <div className="mt-5">
        <img src="./logo.jpeg" alt="brand logo" />
      </div>
      <h1 className="is-size-7 mt-6 has-text-centered">
        {" "}
        Copyright @2021 Sagar Dhandhalya{" "}
        <a href="tel:9081606040"> 9081606040</a>
      </h1>
    </footer>
  );
};

export default Footer;
