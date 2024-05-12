import React, { useEffect } from 'react'

const News = () => {

  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=c451b8a2d2b94b59a64ecba595a58187")
    let data = await response.json();
    setMyNews(data.articles)
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    {
      mynews
    }
  )
}