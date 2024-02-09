import React, { Component } from 'react'

const img = "https://media.istockphoto.com/id/1181778359/vector/breaking-news-vector-background.jpg?s=612x612&w=0&k=20&c=jPg0fAK-Itq51pmv_sRp7UspRhQNY-H_3h8OSB85KgE=";

export default class NewsItem extends Component {
  render() {
    let {url,title,description,imgUrl} = this.props;
    return (
      <div className='my-2'>
        <div className="card" style={{"width": "23rem"}}>
          <img src={imgUrl?imgUrl:img} className="card-img-top" alt="" />
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
