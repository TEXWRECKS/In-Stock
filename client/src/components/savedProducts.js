import React from 'react';
import '../App.css';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import Lego from '../assets/images/lego.jpg';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function SavedProduct() {
  // Price Change toggle button variable for setting state
  const [priceChecked, setPriceChecked] = React.useState(false);
  // Avialability Change toggle button variable for setting state
  const [availabilityChecked, setAvailabilityChecked] = React.useState(false);

  return (
    <div>
      <Container classname="product-container">
        <h1 className="product-saved-heading">All Saved Products</h1>

        <Card>
          <Card.Header>
            <strong style={{ color: 'green' }}>In Stock</strong>
          </Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col className="w-25 p-3 prod-picture">
                  <img
                    src={Lego}
                    alt=""
                    className="mx-auto my-auto photo-small"
                  />
                </Col>
                <Col className="w-50 p-3 description">
                  <Card.Title className="product-name">
                    LEGO Technic Bugatti Chiron 42083 Race Car Building Kit and
                    Engineering Toy, Adult Collectible Sports Car with Scale
                    Model Engine (3599 Pieces)
                  </Card.Title>
                </Col>
                <Col className="w-25 p-3 notification-preference">
                  You can choose to be notified on price changes, availability
                  changes, or both.
                  <br></br>
                  Click the toggles for any which you want to receive
                  notifications for <strong>below!</strong>
                </Col>
              </Row>
              <Row>
                <Col className="w-25 p-3 mb-2 btn-col md justify-content-center">
                  <Button variant="primary" className="view-btn ">
                    View Product
                  </Button>
                </Col>
                <Col className="w-50 p-3 price-stock">
                  <Card.Subtitle className="mb-2 text-muted product-price">
                    Price: <strong>$349.95</strong>
                  </Card.Subtitle>
                  <Card.Text className="product-status">
                    <strong style={{ color: 'red' }}>Out of Stock</strong>
                  </Card.Text>
                </Col>
                <Col className="w-25 p-3 toggle-buttons">
                  {/* Price Change Notification Toggle Button*/}
                  <>
                    <ButtonGroup toggle className="mb-2">
                      <ToggleButton
                        className="p-check btn- btn-secondary active"
                        type="checkbox"
                        checked={priceChecked}
                        value="1"
                        onChange={(e) =>
                          setPriceChecked(e.currentTarget.checked)
                        }
                      >
                        Price Change
                      </ToggleButton>
                    </ButtonGroup>
                    <br />
                  </>
                  {/* Availability Change Notification Toggle Button */}
                  <>
                    <ButtonGroup toggle className="mb-2">
                      <ToggleButton
                        className="a-check btn- btn-secondary active"
                        type="checkbox"
                        checked={availabilityChecked}
                        value="1"
                        onChange={(e) =>
                          setAvailabilityChecked(e.currentTarget.checked)
                        }
                      >
                        Availability Change
                      </ToggleButton>
                    </ButtonGroup>
                  </>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default SavedProduct;
