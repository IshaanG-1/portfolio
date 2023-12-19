import Card from "react-bootstrap/Card";

function TimelineCard(
  title,
  info_str,
  image,
  desc,
  icon_image,
  pursuing_flag = false
) {
  let icon = <></>;
  let name = "timeline-2 right-2";
  let icon_border = "timeline-icon";
  if (pursuing_flag) {
    icon_border = "timeline-icon-red";
  }
  if (icon_image != "") {
    icon = (
      <span className={icon_border}>
        <Card.Img src={icon_image}></Card.Img>
      </span>
    );
    name = "timeline-item right-2";
  }

  return (
    <div className={name}>
      {icon}
      <Card
        className={pursuing_flag ? "card border-danger" : "card border-success"}
        style={{ width: "500px", alignSelf: "center" }}
      >
        {icon_image != "" ? (
          ""
        ) : (
          <Card.Img
            src={image}
            style={{
              width: "500px",
              height: "100px",
              objectFit: "contain",
              marginTop: "10px",
            }}
          />
        )}
        <Card.Body>
          <h4 className="fw-bold">{title}</h4>
          <p className="text-muted">{info_str}</p>
          <ul className="list_comp">
            {desc.map((description) => (
              <li>{description}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TimelineCard;
