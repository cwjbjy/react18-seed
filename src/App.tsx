import { Button, Popover } from "antd";
import styles from "./index.module.less";
import { cube } from "./math.js";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const App = () => {
  console.log(cube(5));
  return (
    <Popover
      content={content}
      title="Title"
      overlayClassName={styles.judicialPopoverWrapper}
      trigger="click"
    >
      <Button type="primary">Hover me</Button>
    </Popover>
  );
};

export default App;
