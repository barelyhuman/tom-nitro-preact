// @island

const clientOnly = (fn, def) => {
  if (typeof window !== "undefined") {
    return fn();
  }
  return def;
};

const getLinkStyle = (path) => {
  return clientOnly(() => {
    return path == window.location.pathname ? "link active" : "link";
  }, "link");
};

export default function Footer() {
  return (
    <>
      <nav class="bottom-nav">
        <a class={getLinkStyle("/")} href="/">
          /home
        </a>
        <a class={getLinkStyle("/projects")} href="/projects">
          /projects
        </a>
      </nav>
    </>
  );
}
