import React, { useMemo } from "react";
import _ from "underscore";
import { t } from "ttag";
import Tooltip from "metabase/components/Tooltip";
import { User } from "metabase-types/api";
import {
  GreetingLogo,
  GreetingMessage,
  GreetingRoot,
} from "./HomeGreeting.styled";

export interface HomeGreetingProps {
  user: User;
  showLogo?: boolean;
}

const HomeGreeting = ({
  user: { first_name },
  showLogo,
}: HomeGreetingProps): JSX.Element => {
  const message = useMemo(() => getMessage(first_name), [first_name]);

  return (
    <GreetingRoot>
      {showLogo && (
        <Tooltip
          tooltip={t`Don't tell anyone, but you're my favorite.`}
          placement="bottom"
        >
          <GreetingLogo />
        </Tooltip>
      )}
      <GreetingMessage showLogo={showLogo}>{message}</GreetingMessage>
    </GreetingRoot>
  );
};

const getMessage = (name: string | null): string => {
  const namePart = name ? `, ${name}` : "";
  const options = [
    t`Welcome To Springboard${namePart}`,
    t`Welcome Back To Springboard${namePart}?`,
    t`Greetings To Springboard${namePart}`,
    t`Good to see you in Springboard${namePart}`,
  ];

  return _.sample(options) ?? "";
};

export default HomeGreeting;
