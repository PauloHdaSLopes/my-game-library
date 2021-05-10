import React from "react";

import { Subtitle, Card, CardDescription, CardCover, CardDescriptionTitle} from "../../Components/UI";
import Dashboard from '@material-ui/icons/Dashboard'
import SettingsEthernet from '@material-ui/icons/SettingsEthernet'
import AccessTime from '@material-ui/icons/AccessTime'

const Analytics = () => {
  return (
    <>
      <Subtitle>Analytics</Subtitle>
      <Card>
        <CardCover>
          <AccessTime fontSize="large" />
        </CardCover>
        <CardDescription>
          <CardDescriptionTitle>Horas jogadas</CardDescriptionTitle>
          <CardDescriptionTitle>150</CardDescriptionTitle>
        </CardDescription>
      </Card>
      <Card>
        <CardCover>
          <Dashboard fontSize="large"/>
        </CardCover>
        <CardDescription>
          <CardDescriptionTitle>Jogos</CardDescriptionTitle>
          <CardDescriptionTitle>17</CardDescriptionTitle>
        </CardDescription>
      </Card>
      <Card>
        <CardCover>
          <SettingsEthernet fontSize="large"/>
        </CardCover>
        <CardDescription>
          <CardDescriptionTitle>Lista de desejo</CardDescriptionTitle>
          <CardDescriptionTitle>3</CardDescriptionTitle>
        </CardDescription>
      </Card>
    </>
  );
};

export default Analytics;