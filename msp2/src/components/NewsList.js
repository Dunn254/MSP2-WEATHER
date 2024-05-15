import React, { useState, useEffect, useLayoutEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

const NewsList = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get('https://newsapi.org/v2/everything?q=usa&apiKey=c451b8a2d2b94b59a64ecba595a58187')
      console.log(response)
      setArticles(response.data.articles)
    }
    getArticles()
  },[])
  return (
    <div>
      {articles.map(article => {
        return(
          <NewsItem
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
          />
        )
      })}
    </div>
  )
}

export default NewsList