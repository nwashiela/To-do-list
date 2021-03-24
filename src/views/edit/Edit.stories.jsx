import Edit from "./Edit";
import Global from "../../components/Global/Global";
import faker from "faker";

const config = {
  title: "views/Edit",
};

export default config;

const Default = () => (
  <Global>
    <Edit onSave={console.log()} taskId={faker.random.uuid()} />
  </Global>
);

const InitialValue = () => (
  <Global>
    <Edit 
    onSave={console.log()}
     initialName={faker.lorem.words()}
      taskId={faker.random.uuid()} />
  </Global>
);

export { Default, InitialValue };
