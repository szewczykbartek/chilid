import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Comments from './components/Comments'
import Comment from './components/Comment'
import CommentsAdd from './components/CommentsAdd'

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;

describe('Addition', () => {
  it('exist component Comments', () => {
    let wrapperComments = shallow(<Comments />);
    expect(wrapperComments.exists()).toEqual(true);
    expect(wrapperComments.find('#comments__list')).toHaveLength(1);
  })
  it('exist component Comment', () => {
    let wrapperComment = shallow(<Comment name="testName" />);
    expect(wrapperComment.exists()).toEqual(true);
    expect(wrapperComment.find('.comment__wrapper')).toHaveLength(1);
    expect(wrapperComment.find('.comment__author').text()).toEqual('testName');
  })
  it('exist component CommentsAdd', () => {
    let wrapperCommentsAdd = shallow(<CommentsAdd />);
    expect(wrapperCommentsAdd.exists()).toEqual(true);
    expect(wrapperCommentsAdd.find('.comments__add')).toHaveLength(1);
  })
})
