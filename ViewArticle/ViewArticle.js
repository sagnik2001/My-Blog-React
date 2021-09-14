import {React,useState,useEffect} from "react"
import {withRouter} from "react-router-dom"
import parse from "html-react-parser"
import classes from "./ViewArticle.module.css"
import {Container} from "reactstrap"
import firebase from "../../src/Config/Firebase.js"
const db=firebase.firestore()
const ViewArticle=(props)=>{
  console.log(props);
  const [article,setarticle]=useState({})
  const [isLoaded1,setIsLoaded1]=useState(false)
  useEffect(()=>{
    if(typeof props.location.state != "undefined")
    {
      if(props.location.state.hasOwnProperty("artic")){
        setarticle(props.location.state.artic)
        setIsLoaded1(true);
      }
    }
    else
    {
      getArticleById(props.match.params.id)
    }
  },[])
const getArticleById=(id)=>{
    db
      .collection("Article")
      .doc(id)
      .get()
      .then(doc=>{
        if(doc.exists)
        {
        
          setarticle(doc.data());
          setIsLoaded1(true);
        }
        else{
          props.history.push({pathname:"/"})
        }
      })
  }
  const TimeToString=(ts)=>{
    const date=new Date(ts*1000)
    return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()
  }
  return(
    <div>
   {isLoaded1 &&

      <Container>
             <div className={classes.Article}>
                  <div className={classes.ImageContainer}>
                       <img className={classes.image}
                         src={article.featureimage}
                         alt={article.Title}/>
                       <div className={classes.ArticleInfo}>
                         <h1 className={classes.Title}>
                              {article.Title}
                         </h1>
                         <div className={classes.Date}>
                           {TimeToString(article.lastModified.seconds)}
                         </div>
                       </div>
                  </div>
                  <div className={classes.ArticleMain}>
                    {parse(article.content)}
                  </div>
             </div>
      </Container>
   }
   {!isLoaded1 && <div>isLoading...</div>}
 </div>
  )
}
export default withRouter(ViewArticle)
