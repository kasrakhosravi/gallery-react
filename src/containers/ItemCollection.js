/**
 * Global dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';

/**
 * Local dependencies
 */
import '../styles/Root.css';
import autoBind from '../utils/auto-bind';
import SearchResultsItem from '../components/ItemSingle';

/**
 * Primitive
 */
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
  
  @media (min-width: 480px) and (max-width: 768px) {
    justify-content: space-between;
  }
`;

/**
 * Import Selectors
 */
import {
  getItems,
  getError,
  changeImagesLoadStatus,
  getImagesLoadingStatus,
} from '../ducks/items';

/**
 * Returns true after all of the images are loaded
 * @returns {boolean}
 */
const imagesLoaded = () => {
  const imgElements = document.querySelectorAll('img');
  for (const img of imgElements) {
    if (!img.complete) {
      return false;
    }
  }
  return true;
};


class ItemCollection extends Component {

  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  /**
   * Callback function to change the images loading status in state
   */
  handleChangeImageStatus() {
    const { changeImagesLoadStatus } = this.props;
    changeImagesLoadStatus(imagesLoaded());
  }

  /**
   * Returns an spinner overlay on the page when images are still not loaded
   */
  renderSpinner() {
    if (!this.props.imagesLoading) {
      return null;
    }
    return <div className="loading">Loading&#8230;</div>;
  }

  render() {

    const {
      items,
      error,
    } = this.props;

    if (error) {
      return (
        <div>Something bad happened: {error.message}</div>
      );
    }

    if (!items.length) {
      return (
        <div style={{ textAlign: 'center', padding: '50px', fontSize: '30px', fontWeight: 'bold' }}>
          <p>No items matching the search criteria..</p>
        </div>
      )
    }

    return (
      <Container>
        {this.renderSpinner()}
        {items.map( (item) =>
            <SearchResultsItem
              key={'item-' + item.id}
              handleChangeImageStatus={this.handleChangeImageStatus}
              {...item}
            />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: getItems(state),
    error: getError(state),
    imagesLoading: getImagesLoadingStatus(state),
  };
};

/**
 * Map action creators / dispatch to props
 */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeImagesLoadStatus,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCollection);
