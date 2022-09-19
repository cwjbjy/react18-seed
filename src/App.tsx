import { useRef, useEffect } from "react";
import styles from "./index.module.less";

const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
    },
  ],
};

const App = () => {
  const domRef = useRef(null);

  useEffect(() => {
    if (domRef.current) {
      let myChart = window.echarts.init(domRef.current);
      myChart.setOption(option)
    }
  }, []);

  return <div className={styles.content} ref={domRef}></div>;
};

export default App;
