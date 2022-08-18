import React from "react";
import { t } from "ttag";
import { CardIcon, CardRoot, CardTitle } from "./HomeHelpCard.styled";

const HomeHelpCard = (): JSX.Element => {
  return (
    <CardRoot href="https://conf.oetkerdigital.com/#all-updates">
      <CardIcon name="reference" />
      <CardTitle>{t`Springboard tips`}</CardTitle>
    </CardRoot>
  );
};

export default HomeHelpCard;
