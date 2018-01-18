/**
 * Global dependencies
 */
import React, { Component } from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
  width: 33.33%;
  padding: 15px;
  margin: 0;
  
  @media (min-width: 480px) and (max-width: 768px) {
    width: 50%;
    padding: 10px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px 0;
  }
`;

const ImageContainer = styled.div`
  height: 300px;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 300;
`;

const ItemHeader = styled.p`
  font-size: 15px;
  margin: 8px 0 2px 0 !important;
`;

class SearchResultsItem extends Component {
  render() {

    const {
      id,
      img_url,
      title
    } = this.props;

    /**
     * Renders images
     * @param imageUrl
     * @returns {*}
     */
    const renderImage = (imageUrl) => {
      return (
        <div>
          <img
            key={id}
            style={{height: '300px', maxWidth: '100%'}}
            src={imageUrl}
            onLoad={this.props.handleChangeImageStatus}
            onError={this.props.handleChangeImageStatus}
          />
        </div>
      )
    };

    /**
     * Return description of UI
     */
    return (
      <OuterContainer>
        <ImageContainer>
          {renderImage(img_url)}
        </ImageContainer>
        <InfoContainer>
          <ItemHeader>
            {(title).toUpperCase()}
          </ItemHeader>
        </InfoContainer>
      </OuterContainer>
    );
  }
}

export default SearchResultsItem;
