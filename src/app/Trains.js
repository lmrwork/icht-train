import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { routes } from '../routes/Trains';

//引入样式
import '../assets/css/TrainIndex.css';
import '../assets/css/TrainSearch.css';
import '../assets/css/TrainBook.css';
import '../assets/css/Motion.css';

//插入测试数据
//车站名文本：Acheng|Acheng|阿城|ACB|3141@Acheng|Acheng|阿城|ACB|3141
import '../assets/data/stations.txt';
import '../assets/data/fetchTrain.txt';

//console.log = () => {};

class Trains extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Route render={routes} />
      </Router>
    );
  }

}

export default Trains;