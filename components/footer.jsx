const Footer = () => {
  return (
    <footer className="navbar navbar-dark bg-dark row align-items-center px-4">
      <section className="col-auto">
        <div className="mx-2 text-white">
          <img src="/vercel-logo.svg" alt="Vercel Logo" />
        </div>
        <div className="mx-2 text-white">
          <img src="/puzzlerdev-logo.svg" alt="PuzzlerDev Logo" />
        </div>
      </section>
      <section className="col-auto">
        <p className="mx-2 text-white">
          <span>Reach me:</span>
        </p>
        <ul className="mx-2 text-white">
          <li>
            <a href="/">GitHub</a>
          </li>
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">TikTok</a>
          </li>
          <li>
            <a href="/">Discord</a>
          </li>
          <li>
            <a href="/">Telegram</a>
          </li>
          <li>
            <a href="/">YouTube</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
