import React, { Component } from 'react'

const img = "https://img.freepik.com/premium-photo/news-broadcast-background-breaking-news_327072-2662.jpg";

export default class NewsItem extends Component {
  render() {
    let {url,title,description,imgUrl} = this.props;
    return (
      <div className='my-2'>
        <div className="card" style={{"width": "23rem"}}>
          <img src={imgUrl?imgUrl:img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title my-2">{title?title.slice(0,50)+"..":" "}</h5>
            <p className="card-text">{description?description.slice(0,70)+"...":" "}</p>
            <a href={url} className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
