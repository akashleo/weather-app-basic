import React from "react";
//import mystyles from "./styles.css";
import { Card, Image, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import moment from "moment";

const CardExampleCard = ({ weatherData }) => {
  const icon = weatherData.weather[0].icon;
  const srcSTR = "http://openweathermap.org/img/w/" + icon + ".png";

  const style = {
    margin: "auto",
    marginTop: "5rem",
  };
  return (
    <Card style={style}>
      <Image
        //src="https://store-images.s-microsoft.com/image/apps.10595.14397430983184912.cfdf6f70-0a34-4999-b494-936559d822c3.7355576f-baf9-4be3-8b34-27bdc6ac1bd2"
        src={srcSTR}
        wrapped
        ui="false"
      />
      <Card.Content>
        <Card.Header>
          <Icon name="map marker alternate" />
          {weatherData.name}
        </Card.Header>
        <Card.Description>
          <p>
            Sunrise:{" "}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </p>
          <p>
            Sunset:{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </p>
          <p>Description: {weatherData.weather[0].main}</p>
          <p>Day: {moment().format("dddd")}</p>
          <p>Date: {moment().format("LL")}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="tint" />
        {weatherData.main.humidity} % &nbsp;&nbsp;
        <Icon name="thermometer" />
        {weatherData.main.temp} &deg;C
      </Card.Content>
    </Card>
  );
};

export default CardExampleCard;
