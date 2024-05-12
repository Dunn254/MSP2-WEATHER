import { useState, useEffect } from "react";

const URL = "https://newsapi.org/v2/everything?q=football&apiKey=c451b8a2d2b94b59a64ecba595a58187"

function App() {

  const [article, setArticle] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
      console.log(result.json());
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      Today's News: {article}
    </div>
  );
}

export default App;



