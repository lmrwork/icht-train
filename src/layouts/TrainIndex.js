import React from 'react';
import { NavBar, List, DatePicker, Button, WingBlank, WhiteSpace, TabBar } from 'antd-mobile';
import { connect } from 'react-redux';
import { setStartDate } from '../actions/Trains';
import loc from 'antd-mobile/lib/date-picker/locale/zh_CN';

class TrainIndex extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
    console.log('👇 TrainIndex');
    console.log(props);
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('TrainSearch.shouldComponentUpdate');
    return this.props.fromStation.code != nextProps.fromStation.code || 
           this.props.toStation.code != nextProps.toStation.code ||
           this.props.startDate != nextProps.startDate;
  }

  onChange = (moment) => {
    //this.setState({startDate: moment});
    this.props.setStartDate(moment);
  }

  linkto = (type) => {
    this.props.history.push('/city?'+type);
  }

  onSearch = () => {
    this.props.history.push('/search');
  }

  render() {
    console.log("🔥 TrainIndex.render()");
    return (
      <div>
        <NavBar iconName={null} leftContent={this.props.lang.navibarLeftIndex} rightContent={this.props.lang.navibarRight} mode="light">
          <h1 id="TrainIndex-h1">{this.props.lang.navibarTitle}</h1>
        </NavBar>
        <List renderHeader={this.props.lang.tips} id="TrainIndex-searchList">
          <List.Item platform="ios" extra={this.props.fromStation.en+', '+this.props.fromStation.cn} arrow="horizontal" thumb={this.props.lang.cityIcon} onClick={() => this.linkto('from')}> 
            {this.props.lang.fromStationLabel}
          </List.Item>
          <List.Item platform="ios" extra={this.props.toStation.en+', '+this.props.toStation.cn} arrow="horizontal" thumb={this.props.lang.cityIcon} onClick={() => this.linkto('to')}> 
            {this.props.lang.toStationLabel} 
          </List.Item>
          <DatePicker mode="date" title={this.props.lang.datepickerTitle} extra={this.props.lang.datepickerExtra} value={this.props.startDate} onChange={moment => this.onChange(moment)} locale={loc} format={moment => moment.format('LL')}>
            <List.Item platform="ios" arrow="horizontal" thumb={this.props.lang.dateIcon}> {this.props.lang.datepickerLabel} </List.Item>
          </DatePicker>
        </List>
        <WhiteSpace size='lg'/>
        <WingBlank size="lg">
          <Button className="btn" icon="search" id="TrainIndex-search-btn" onClick={this.onSearch}>{this.props.lang.searchTxt}</Button>
        </WingBlank>
        <div id="TrainIndex-tabbar-div">
          <TabBar barTintColor="white">
            {this.props.lang.indexTabBar.map( 
              i => <TabBar.Item title={i.name} key={i.name} icon={<div/>}/>
            )}
          </TabBar>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  lang: store.get('lang'),
  fromStation: store.get('fromStation'),
  toStation: store.get('toStation'),
  startDate: store.get('startDate'),
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (moment) => dispatch(setStartDate(moment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainIndex);