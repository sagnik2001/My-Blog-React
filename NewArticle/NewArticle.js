import {React,useState} from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


import {Container,Row,Col,Card,CardHeader,CardBody,FormGroup,Label,Input,Button} from "reactstrap"
import classes from "./NewArticle.module.css"
const NewArticle=(props)=>{
  const [article,setarticle1] = useState({
    title:' ',
    content:' ',
    createDate:new Date(),
    featureimage:' ',
    isPublish:false,
    lastModified:new Date(),
    createUserId:' ',
  })
  var quillObj: any;

NewArticle.modu=
  {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ],
    }

 NewArticle.formatOptions =[
  'header',
     'bold', 'italic', 'underline', 'strike', 'blockquote',
     'list', 'bullet', 'indent',
     'link', 'image'
]
const onChangeArticleTitle =(e)=>{
  setarticle1(prevState => {return{...prevState,title:e }})
}
const onChangeArticleContent=(e)=>{
    setarticle1(prevState => {return{...prevState,content:e} })
}
const onChangeArticlePublish=(e)=>{
    setarticle1(prevState => {return{...prevState,isPublish:e==="True"} })
}
  return(
    <Container>
      <Row>
         <Col xl={9} lg={9} md={8} sm={12} xs={12}>
             <h2 className={classes.SectionTitle}>New Article</h2>
             <FormGroup>
                 <Label className={classes.Label}>Title</Label>
                 <Input type="text" name="articleTitle" id="articleTitle" placeholder=""
                    onChange={(e)=>onChangeArticleTitle(e.target.value)}
                    value={article.title}></Input>

             </FormGroup>
             <FormGroup>
                 <ReactQuill
                   ref={(el) => {
            quillObj = el;
          }}
                          theme="snow"
                         value={article.content}
                         onChange={(e)=>onChangeArticleContent(e)}
                        modules={NewArticle.modu}
                        formats={NewArticle.formatOptions}

                   ></ReactQuill>


             </FormGroup>
         </Col>
         <Col xl={3} lg={3} md={4} sm={12} xs={12}>
             <Card>
                 <CardHeader>
                      Article Settings
                 </CardHeader>
                 <CardBody>
                     <FormGroup>
                        <Label className={classes.Label}>Publish</Label>
                        <Input type="select" name="publish" id="publish" onChange={(e)=>onChangeArticlePublish(e.target.value)}>
                            <option>False</option>
                            <option>True</option>
                        </Input>
                     </FormGroup>
                     <FormGroup>
                        <Button color="danger" onClick={(e)=>console.log(article)} >
                              Submit
                        </Button>
                     </FormGroup>
                 </CardBody>
             </Card>
         </Col>
      </Row>
    </Container>
  )
}
export default NewArticle
