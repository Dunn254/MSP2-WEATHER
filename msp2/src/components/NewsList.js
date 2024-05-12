import { useState, useEffect } from "react";
import NewsItem from './NewsItem'


const URL = "https://newsapi.org/v2/everything?q=pokemon&apiKey=c451b8a2d2b94b59a64ecba595a58187"

function NewsList() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
      result.json().then(json => {
        console.log(json);
      })
    }
    fetchData();
  }, [])
  return (
    <div>
      {articles.map(article => {
        return (
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

export default NewsList;