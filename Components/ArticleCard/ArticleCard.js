import {Link} from "react-router-dom"
import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, TabContent
} from 'reactstrap';
import classes from "./Article.module.css"
export function TimeToString(ts){
  const date=new Date(ts*1000)
  return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()
}
const ArticleCard = (props) => {
  console.log(props);
  return (

      <Card className={classes.ArticleCard}>
        <Link to={{
            pathname:"article/"+ props.data1.id,
            state:{artic:props.data1}
          }}>
             <CardImg top width="100%" src={props.data1.featureimage} alt="Card image cap"  className={classes.CardImage}/>
        </Link >
        <CardBody className={classes.CardBody}>
          <Link to={{
            pathname:"article/"+ props.data1.id,
            state:{artic:props.data1}
            }}>
                <CardTitle  className={classes.CardTitle}>{props.data1.Title}</CardTitle>
          </Link>
            <CardSubtitle  className={classes.CardSubtitle}>
               <TabContent className={classes.Artif}>
                {props.data1.categoryLabel}
              </TabContent>
               <TabContent className={classes.Artif}>
                {TimeToString(props.data1.createDate.seconds)}
              </TabContent>
          </CardSubtitle>
          </CardBody>
      </Card>

  );
};

export default ArticleCard;
