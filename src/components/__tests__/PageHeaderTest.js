/* global describe it beforeEach */
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import PageHeader from '../PageHeader';

class PageHeaderTest extends React.Component {
  render() {
    return (<div><PageHeader title="page title" /></div>);
  }
}

describe('PageHeader', () => {
  it('should render', () => {
    const pageWrapper = ReactTestUtils.renderIntoDocument(
      <PageHeaderTest />
    );
    expect(pageWrapper).toExist();
  });
});
