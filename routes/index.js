import renderComponent from "preact-render-to-string";
import Base from "../components/base";
import HomePage from "../components/pages/Home";

export default defineEventHandler((event) => {
  return renderComponent(
    <Base activePath={"/"}>
      <HomePage />
    </Base>
  );
});
