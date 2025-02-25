import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

export default function Event(props) {
  const [event, setEvent] = useState(props.event);

  const book = () => {
    props.fnt();
    setEvent((e) => ({
      ...e,
      nbTickets: e.nbTickets - 1,
      nbParticipants: e.nbParticipants + 1,
    }));
  };

  return (
    <Col sm={12} md={6} lg={4} className="mb-4">
      <Card className="shadow-sm" style={{ borderRadius: "15px" }}>
        <Card.Img
          variant="top"
          style={{
            height: 200,
            objectFit: "cover",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            filter: event.nbTickets === 0 ? "grayscale(100%)" : "none",
          }}
          src={event.nbTickets === 0 ? "/Images/F5.jpg" : event.img}
          alt={event.name}
        />
        <Card.Body>
          <Card.Title className="text-center">
            <Link to={`/events/${event.name}`} className="text-primary text-decoration-none">
              {event.name}
            </Link>
          </Card.Title>
          <Card.Text className="text-center">
            <Badge bg="success" className="me-1">
              Price: {event.price} TND
            </Badge>
            <Badge
              bg={event.nbTickets === 0 ? "danger" : "info"}
              className="me-1"
            >
              {event.nbTickets === 0
                ? "Sold Out"
                : `Tickets: ${event.nbTickets}`}
            </Badge>
            <Badge bg="primary" className="me-1">
              Participants: {event.nbParticipants}
            </Badge>
          </Card.Text>

          <div className="d-flex justify-content-between">
            <Button
              variant="primary"
              onClick={book}
              disabled={event.nbTickets === 0}
            >
              {event.nbTickets === 0 ? "Sold Out" : "Book Now"}
            </Button>
            <Button
              variant={event.like ? "danger" : "outline-danger"}
              onClick={() => setEvent((e) => ({ ...e, like: !e.like }))}
            >
              {event.like ? "❤️ Dislike" : "🤍 Like"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
