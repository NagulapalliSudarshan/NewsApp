import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor(){
        super();
        
      }
    render() {
        return (
        <div className='container my-3'>
            <h3>Today's Top News</h3>
            <div className='row'>
                <div className='col-md-4'>
                    <NewsItem url="..." title="hi" description="desc"/>
                </div>
                <div className='col-md-4'>
                    <NewsItem url="..." title="hi" description="desc"/>
                </div>
                <div className='col-md-4'>
                    <NewsItem url="..." title="hi" description="desc"/>
                </div>
            </div>
        </div>
        )
    }
}
