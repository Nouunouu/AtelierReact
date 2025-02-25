import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import eventsJson from "../Data/events.json";
import NavBar from "./NavigationBar";

export default function EventDetails() {
  const { eventName } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = eventsJson.find(
      (item) => item.name.toLowerCase() === eventName.toLowerCase()
    );
    setEvent(foundEvent);
  }, [eventName]);

  if (!event) {
    return <h2 className="text-center">Événement non trouvé</h2>;
  }

  return (
    <div className="d-flex justify-content-center mt-4">

      <Card className="shadow-sm" style={{ width: "30rem", borderRadius: "15px" }}>
        <Card.Img
          variant="top"
          style={{
            height: 300,
            objectFit: "cover",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
          src={event.img}
          alt={event.name}
        />
        <Card.Body>
          <Card.Title className="text-center">{event.name}</Card.Title>
          <Card.Text className="text-center">
            <Badge bg="success" className="me-1">
              Price: {event.price} TND
            </Badge>
            <Badge bg={event.nbTickets === 0 ? "danger" : "info"} className="me-1">
              {event.nbTickets === 0 ? "Sold Out" : `Tickets: ${event.nbTickets}`}
            </Badge>
            <Badge bg="primary" className="me-1">
              Participants: {event.nbParticipants}
            </Badge>
          </Card.Text>
          <Card.Text className="text-muted">
            <strong>Description:</strong> {event.description}
          </Card.Text>
          
          <Card.Text className="text-muted">
            <strong>Lieu:</strong> {event.Lieu}
          </Card.Text>
          <Button variant="secondary" href="/events">
            Retour aux événements
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
