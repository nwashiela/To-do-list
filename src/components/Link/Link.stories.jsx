import Global from "../Global/Global";
import Links from "./Link";

const config = {
  title: "components/Link",
};

export default config;

const Default = () => (
  <Global>
    <Links url="/test"> Click me! </Links>
  </Global>
);
const Full = () => (
  <Global>
    <Links url="/test" fullWidth>
      {" "}
      Click me!{" "}
    </Links>
  </Global>
);
const Disabled = () => (
  <Global>
    <Links disabled url="/test">
      {" "}
      Click me!{" "}
    </Links>
  </Global>
);

export { Default, Full, Disabled };
