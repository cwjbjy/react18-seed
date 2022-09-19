import { Button, Popover } from "antd";
import styles from "./index.module.less";
import { cube } from "./math.js";
import {isNaN,isNull,join} from 'lodash'
import './getData'

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const App = () => {
  console.log(isNaN(NaN));
  console.log(isNull(NaN));
  console.log(join(['a', 'b', 'c'], '~'));
  
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
