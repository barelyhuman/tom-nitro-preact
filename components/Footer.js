const getLinkStyle = (path, activePath) =>
  path == activePath ? "link active" : "link";

export default function Footer({ activePath }) {
  return (
    <>
      <nav className="bottom-nav">
        <a className={getLinkStyle("/", activePath)} href="/">
          /home
        </a>
        {/* <a className={getLinkStyle('/about')} href="/about">/about</a> */}
        <a className={getLinkStyle("/projects", activePath)} href="/projects">
          /projects
        </a>
      </nav>
    </>
  );
}
