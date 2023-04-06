import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, publishedAt, author, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
            <p className="card-text">{description}...</p>
            <p className="card-date">{`publishedAt : ${new Date(
              publishedAt
            ).toGMTString()} `}</p>
            <p className="card-date">{`author : ${author} `}</p>

            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
