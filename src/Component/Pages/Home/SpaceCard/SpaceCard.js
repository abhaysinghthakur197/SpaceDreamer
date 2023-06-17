 import moment from "moment";
 import { Link } from "react-router-dom";
 import '../../../../index.css'
 import {Card,Row,Col,Container} from 'react-bootstrap'


const SpaceCard = ({news}) => {
    console.log(news);
    
    return (
        <Container className="space_card">
            <Row className="card_wrap--outer ml-5">
                <p className="text-center text-dark news_box_p">SPACE NEWS BOX</p>
                {Array.from(news).map((article) => (
                    <Col className=" card_wrap--inner" key={article.id} xs={12} md={6} lg={4}>
                        <Card className="style_card">
                            <Card.Img className="card-img" src={article.imageUrl} />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">{article.title}</Card.Title>
                                <div className="date">
                                    <Card.Text className="card-summary card_date">{moment(article.publishedAt).format("dddd, MMMM Do, YYYY")}</Card.Text>
                                </div>
                                <Card.Text className="card-summary flexible">{article.summary}</Card.Text>
                                <div className="text-center">
                                    <Link to = {article.url}>
                                    <button type="button" className="card_button">{article.newsSite}</button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}
export default SpaceCard;