import { Carousel, Card, Divider, Spin } from "antd";
import React from "react";
import classNames from "classnames";

import "./style.css";

export default class MainCarousel extends React.Component {
    renderCardMeta(image) {
        return (
            <div>
                <span>
                    <b>Author:</b>
                </span>
                <span>{image.author}</span>
                <br />
                <span>
                    <a target="_blank" href={image.author_url}>
                        Author Splash!
                    </a>
                </span>
                <br />
                <span>
                    <a target="_blank" href={image.post_url}>
                        Post Url
                    </a>
                </span>
            </div>
        );
    }

    renderContentCards() {
        const images_to_display = this.props.carouselImages
            ? this.props.carouselImages.map(image => {
                  const imageName = image.filename.split("_")[0];
                  return (
                      <h3 key={"carouselImageH3" + image.id}>
                          <div key={"carouselImage" + image.id}>
                              <Card
                                  cover={
                                      <img
                                          className="c-Carousel-Image"
                                          alt={"exampleImage" + image.id}
                                          src={`https://picsum.photos/800/600?image=${imageName}`}
                                      />
                                  }
                              >
                                  <Divider />
                                  <div className="c-Slider-Footer">
                                      {this.renderCardMeta(image)}
                                  </div>
                              </Card>
                          </div>
                      </h3>
                  );
              })
            : null;
        return images_to_display;
    }

    renderSpinner() {
        return this.props.isFetchingCarouselImages ? (
            <div>
                <Spin size="large" />
            </div>
        ) : null;
    }

    render() {
        return (
            <div className={classNames("c-Main-Carousel")}>
                <Carousel effect="fade">
                    {this.renderSpinner()}
                    {this.renderContentCards()}
                </Carousel>
            </div>
        );
    }
}
