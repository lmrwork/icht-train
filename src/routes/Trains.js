import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Route, Redirect } from 'react-router-dom';
import TrainIndex from '../layouts/TrainIndex';
import TrainCity from '../layouts/TrainCity';
import TrainSearch from '../layouts/TrainSearch';
import TrainBook from '../layouts/TrainBook';

export const routes = (props) => {

  //传递redux和router的值
  const location = props.location;

  //页面路由表
  const componentArray = [
    { to: '/', component: TrainIndex, name: 'index' },
    { to: '/city', component: TrainCity, name: 'city' },
    { to: '/search', component: TrainSearch, name: 'search' },
    { to: '/book', component: TrainBook, name: 'search' },
  ];

  //使用当前path遍历路由表，转化取出对应的组件
  const component = componentArray.map(item => {
    if (location.pathname === item.to) {
      return item.component;
    }
  }).filter(item => item)[0];

  return (
    <CSSTransitionGroup transitionName="page" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
      <Route location={location} key={location.pathname} path={location.pathname} component={component} />
    </CSSTransitionGroup>
  );

}