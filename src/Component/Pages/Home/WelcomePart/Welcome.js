
import astronaut from '../../../Images/astronaut.png';
import '../../../../index.css'
import { Container,Row,Col } from 'react-bootstrap';


const Welcome = () => {

    
    return (
        <Container className="welcome-container">
            <Row className='row'>
                <Col xs={12} md={6} lg={4}>
                    <div className="welcome-left">
                        <h1 className="heading">Welcome to Space <br />
                            <span className='Dreamer text-danger'>Dreamer</span>
                        </h1>
                        <p style={{backgroundColor: "lightblue",fontSize:"20px"}}>A website for space news</p>
                        
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <div className="welcome-right">
                        <img className="image" src={astronaut} alt="astronaut" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Welcome;