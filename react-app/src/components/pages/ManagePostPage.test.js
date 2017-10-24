import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManagePostPage} from './ManagePostPage';
import jsdom from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;

describe ('Manage Post Page', () => {
  it('sets error message when trying to save empty title or content', () => {
    const props = {
      actions: {savePost: () => { return Promise.resolve(); }},
      post: {title: '', content: ''}
    };

    const wrapper = mount(<ManagePostPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters');
    expect(wrapper.state().errors.content).toBe('Content must be at least 30 characters');
  });
});
