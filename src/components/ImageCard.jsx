import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ImageCard(title, text, image, link) {
  let imageCard = <Card.Img variant="top" src={image} />;
  let button = (
    <Button href={link} variant="outline-success">
      GitHub
    </Button>
  );
  if (image.includes("mp4")) {
    imageCard = (
      <video className="video-mask" autoPlay loop muted src={image} />
    );
  }
  if (link.includes("arxiv")) {
    imageCard = <a href={link}>{imageCard}</a>;
    button = <></>;
  }
  if (link === "") {
    button = <></>;
  }
  return (
    <Card
      className="card border-success"
      style={{ width: "500px", alignSelf: "center"}}
    >
      {imageCard}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {button}
      </Card.Body>
    </Card>
  );
}

export default ImageCard;
