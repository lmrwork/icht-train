import React from 'react';
import { NavBar, List, DatePicker, Button, WingBlank, WhiteSpace, TabBar } from 'antd-mobile';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setStartDate } from '../actions/Trains';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

class TrainIndex extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      trainsNavibarTitle: this.props.lang.trainsNavibarTitle,
      trainsNavibarLeft: this.props.lang.trainsNavibarLeft,
      trainsNavibarRight: this.props.lang.trainsNavibarRight,
      tips: this.props.lang.tips,
      fromStationLabel: this.props.lang.fromStationLabel,
      toStationLabel: this.props.lang.toStationLabel,
      fromStation: this.props.fromStation,
      toStation: this.props.toStation,
      tabBar: this.props.lang.tabBar,
      datepickerLabel: this.props.lang.datepickerLabel,
      datepickerTitle: this.props.lang.datepickerTitle,
      datepickerExtra: this.props.lang.datepickerExtra,
      searchTxt: this.props.lang.searchTxt,
      cityIcon: '/public/img/city.png',
      dateIcon: '/public/img/date.png',
      startDate: this.props.startDate,
    };
    console.log('TrainIndex 👇');
    console.log(props);
  }

  onChange = (moment) => {
    this.setState({ startDate: moment });
    this.props.setStartDate(moment);
  }

  linkto = (type) => {
    this.props.history.push('/city?'+type);
  }

  render() {
    return (
      <div>
        <NavBar iconName={null} leftContent={this.state.trainsNavibarLeft} rightContent={this.state.trainsNavibarRight} mode="light">
          <h1 id="TrainIndex-h1">{this.state.trainsNavibarTitle}</h1>
        </NavBar>
        <List renderHeader={() => this.state.tips} id="TrainIndex-searchList">
          <List.Item platform="ios" extra={this.state.fromStation.en+', '+this.state.fromStation.cn} arrow="horizontal" thumb={this.state.cityIcon} onClick={() => this.linkto('from')}> 
            {this.state.fromStationLabel}
          </List.Item>
          <List.Item platform="ios" extra={this.state.toStation.en+', '+this.state.toStation.cn} arrow="horizontal" thumb={this.state.cityIcon} onClick={() => this.linkto('to')}> 
            {this.state.toStationLabel} 
          </List.Item>
          <DatePicker mode="date" title={this.state.datepickerTitle} extra={this.state.datepickerExtra} value={this.state.startDate} onChange={moment => this.onChange(moment)} locale={enUs}>
            <List.Item platform="ios" arrow="horizontal" thumb={this.state.dateIcon}> {this.state.datepickerLabel} </List.Item>
          </DatePicker>
        </List>
        <WhiteSpace size='lg'/>
        <WingBlank size="lg">
          <Button className="btn" icon="search" id="TrainIndex-search-btn">{this.state.searchTxt}</Button>
        </WingBlank>
        <div id="TrainIndex-tabbar-div">
          <TabBar barTintColor="white">
            {this.state.tabBar.map( 
              (i) => <TabBar.Item title={i.name} key={i.name} icon={<div/>}/>
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