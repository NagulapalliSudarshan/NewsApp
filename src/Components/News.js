import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor(){
        super();

        this.state={
            articles : [],
            loading : false,
            page:1,
            totalArticles:0
        }      
      }

    async componentDidMount(){
        let data = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=9e010d93c06f4b69bc93807839736a19&page=1&pageSize=20")
        let parsedData= await data.json() 
        console.log(parsedData)
        this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults})  
    }
    
    async handleNextClick(){
        if(this.state.page + 1 > Math.ceil(this.state.totalArticles/20)){

        }else{
            console.log(this.state.articles)
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9e010d93c06f4b69bc93807839736a19&page=${this.state.page + 1}&pageSize=20`)
            let parsedData= await data.json() 
            this.setState({
                articles:parsedData.articles,
                page:this.state.page + 1
            })
        }
    }
    
    async handlePrevClick(){
            console.log(this.state.articles)
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9e010d93c06f4b69bc93807839736a19&page=${this.state.page - 1}&pageSize=20`)
            let parsedData= await data.json() 
            this.setState({
                articles:parsedData.articles,
                page:this.state.page - 1
            })
    }

    render() {
        return (
        <div className='container my-3'>
            <h3>Today's Top News</h3>
            <div className='row'>
            {this.state.articles.map(element=>{
                return <div className='col-md-4' key={element.url}>
                        <NewsItem url={element.url} title={element.title} description={element.description} imgUrl={element.urlToImage}/>
                    </div>
            })}
            </div>
            <div className='container d-flex justify-content-between my-5'>
                <button type="button" disabled={this.state.page<=1}className="btn btn-dark" onClick={this.handlePrevClick.bind(this)}>&larr;Previous</button>
                <button type="button"  className="btn btn-dark"  onClick={this.handleNextClick.bind(this)}>Next&rarr;</button>
            </div>
        </div>
        )
    }
}
