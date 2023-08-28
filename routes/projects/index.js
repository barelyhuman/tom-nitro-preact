import renderComponent from "preact-render-to-string";
import Base from "../../components/base";
import Projects from "~/components/pages/Projects";

export default defineEventHandler(() => {
  return renderComponent(
    <Base activePath={"/projects"}>
      <Projects />
    </Base>
  );
});
