import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useParams} from "react-router-dom"
import api from "../_Api"


function ArticlePage () {
  const parms = useParams();
  console.log(parms);
  const [article, setArticle] = useState({});

  useEffect(() => {
    
    api.get(`/v1/news/get/${parms.articleId}`)
      .then(res => {
        setArticle(res.data);

      })
      .catch(err => {
        console.log(err.message)
      })

  }, []);

  return (
    <>
      <Navbar />
      <h1>Hello world</h1>
      <Footer />
    </>
  )
}
export default ArticlePage;