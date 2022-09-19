import { Button, Popover } from 'antd';
import styles from './index.module.less'

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const App = () => (
  <Popover content={content} title="Title" overlayClassName={styles.judicialPopoverWrapper} trigger="click">
    <Button type="primary">Hover me</Button>
  </Popover>
);

export default App;