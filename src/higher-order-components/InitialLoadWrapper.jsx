/**
 * Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Sub-components
 */
import Loading from '../components/Loading';

/**
 * Initial load features
 */
import {
  getInitialLoadStatus,
  populateItems,
} from '../ducks/items';

/**
 * Wrapper component that wraps the child component in order to
 * check if the initialization of the app has been performed, and in case it hasn't
 * kick off the initial data loading before rendering the child component
 * Shows a loading screen while loading)
 */
class InitialLoadWrapper extends Component {

  componentWillMount() {

    const {
      populateItems,
      isInitiallyLoaded,
    } = this.props;

    if (!isInitiallyLoaded) {
      populateItems();
    }

  }

  render() {

    const {
      children,
      isInitiallyLoaded,
    } = this.props;

    const loadingMessage = (
      <Loading>
        Loading...
      </Loading>
    );

    return isInitiallyLoaded ? children : loadingMessage;
  }
}

const mapStateToProps = (state) => ({
  isInitiallyLoaded: getInitialLoadStatus(state),
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    populateItems,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialLoadWrapper);
