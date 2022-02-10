import { Link } from "react-router-dom";
const Footer = () => {
  return (

    <footer style={{ backgroundColor: '#ffffff' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <u><h1 className="is-size-5 has-text-centered mb-4">સંપર્ક કરો :- રવિ ધાંધલ્યા </h1></u>
          <a href="tel:9870031516" className="is-size-6">
            <span className="icon mx-4">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </span>
            9870031516
          </a>

          <a href="tel:7359157200" className=" is-size-6">
            <span className="icon mx-4">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </span>
            7359157200
          </a>
          <div className="mt-5">
            <img src="./logo.jpeg" alt="brand logo" style={{ maxHeight: '300px' }} />
          </div>
        </div>


      </div>

      <h1 className="is-size-7 mt-6 has-text-centered">

        Copyright @2021 સાગર ધાંધલ્યા.
        <Link className="has-text-link" to="/admin">
          {"   "}admin page
        </Link>
      </h1>
    </footer>
  );
};

export default Footer;
