import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status="TEST" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('TEST');
  });

  test('after creation span should be displayed', () => {
    const component = create(<ProfileStatus status="TEST" />);
    //const instance = component.getInstance();
    const root = component.root;
    let span = root.findByType('span');
    expect(span).not.toBeNull();
  });

  test('after creation input should not be displayes', () => {
    const component = create(<ProfileStatus status="TEST" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType('input');
    }).toThrow();
  });

  test('after creation span should be contains correct status', () => {
    const component = create(<ProfileStatus status="TEST" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).toBe('TEST');
  });

  test('input should be displayed in editMode instead od span', () => {
    const component = create(<ProfileStatus status="TEST" />);
    const root = component.root;
    let span = root.findByType('span');
    span.props.onDoubleClick();
    let input = root.findByType('input');
    expect(input.props.value).toBe('TEST');
  });

  test('callback should be called', () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="TEST" updateStatusThunk={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
