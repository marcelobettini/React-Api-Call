import { useGet } from "../hooks/useGet";
import { Container, Row, Col } from "react-bootstrap";

const ApiCall = () => {
  const [info, loading, error] = useGet("character");
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Oh snaps! There was an error 😫</h3>;

  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="text-primary text-center"> Cast of Characters</h1>
            {info.results.length &&
              info.results.map((char) => <p key={char.id}>{char.name}</p>)}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ApiCall;
