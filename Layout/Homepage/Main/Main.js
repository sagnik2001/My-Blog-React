import {React,useState,useEffect} from "react"
import {Container} from "reactstrap"
import ArticleCard from "../../../Components/ArticleCard/ArticleCard.js"
import firebase from "../../../Config/Firebase.js"
const db=firebase.firestore()
const Main=(props)=>{
  const[isLoaded,setIsLoaded]=useState(false);
  const[Articles1,setArticles]=useState([]);
  useEffect(()=>{
    getMyarticles();
  },[])
  const getMyarticles=()=>{
    db
       .collection("Article")
       .limit(8)
       .get()
       .then(data=>{
         if(!data.empty){
           let allArticles=[];
           data.forEach((doc)=>{
             const article={
               id:doc.id,
               ...doc.data()
             }
             allArticles.push(article)
           })
          setArticles(allArticles);
          setIsLoaded(true)
         }
       })
  }

     console.log(Articles1);

  return(

      <Container>

               {isLoaded && Articles1.map((article,index)=>(

                    <ArticleCard  key={index} data1={article}/>
                 )) }

      </Container>


  )
}
export default Main
