import Add from "./Add";
import Global from "../../components/Global/Global";
import faker from "faker";

const config = {
  title: "views/Add",
};

export default config;

const Default = () => (
  <Global>
    <Add onSave={console.log} taskId={faker.random.uuid()} />
  </Global>
);
const InitialName = () => (
  <Global>
    <Add onSave={console.log} initialName={faker.lorem.words()} />
  </Global>
);

export { Default, InitialName };
