import React from "react";
//import "./styles.css";
import { Card, Image, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const CardExampleCard = ({ weatherData }) => (
  <Card>
    <Image
      src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>
        <Icon name="map marker alternate" />
        {weatherData.name}
      </Card.Header>
      <Card.Description>
        <p>
          Sunrise:{" "}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
        </p>
        <p>
          Sunset:{" "}
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
        </p>
        <p>Description: {weatherData.weather[0].main}</p>
        <p>Humidity: {weatherData.main.humidity} %</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="tint" />
      {weatherData.main.humidity} %
      <Icon name="thermometer" />
      {weatherData.main.temp} &deg;C
    </Card.Content>
  </Card>
);

export default CardExampleCard;
