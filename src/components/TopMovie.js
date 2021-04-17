import React from "react";
import {  Card ,Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=813d4a83379f3df4a9474383e81293c7";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>didn't get a person</div>;
    }

 
    return (
      <div>
        {this.state.people.map(person => (
          <div >
              <h1 className="text-center">Top Rated Movie</h1>
               <Container>
  <Row>
    <Col >
    <Card >
    Movie name:<Card.Body className="shadow p-3 mb-5 bg-dark text-white rounded">{person.original_title}  </Card.Body>

    Overview:<Card.Body className="shadow-lg p-3 mb-5 bg-dark text-white rounded"> {person.overview}</Card.Body>
  Release date:<Card.Body className="shadow p-3 mb-5 bg-dark text-white rounded">{person.release_date} </Card.Body>
  
  
  
</Card></Col>
<Col>
<Card >
    Popularity:<Card.Body className="shadow-lg p-3 mb-5 bg-dark text-white rounded"> {person.popularity}</Card.Body>
 Rating:<Card.Body className="shadow p-3 mb-5 bg-dark text-white rounded">{person.vote_average} </Card.Body>
  Language:<Card.Body className="shadow p-3 mb-5 bg-dark text-white rounded">{person.original_language}</Card.Body>
  {/* Movie imae:<Card.Body className="shadow-sm p-3 mb-5 bg-white rounded">{person.video}  </Card.Body> */}
  
  
</Card>
</Col>
  </Row>
</Container>

           
          </div>
        ))}
      </div>
    );
  }
}