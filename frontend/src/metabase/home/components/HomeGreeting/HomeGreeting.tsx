import { useMemo } from "react";
import { t } from "ttag";
import _ from "underscore";
import { useSelector } from "metabase/lib/redux";
import Tooltip from "metabase/core/components/Tooltip";
import { getUser } from "metabase/selectors/user";
import { getHasMetabotLogo } from "../../selectors";
import {
  GreetingLogo,
  GreetingMessage,
  GreetingRoot,
} from "./HomeGreeting.styled";

export const HomeGreeting = (): JSX.Element => {
  const user = useSelector(getUser);
  const showLogo = useSelector(getHasMetabotLogo);
  const name = user?.first_name;
  const message = useMemo(() => getMessage(name), [name]);

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

const getMessage = (name: string | null | undefined): string => {
  const namePart = name ? `, ${name}` : "";
  const options = [
    t`Welcome To Springboard${namePart}`,
    t`Welcome Back To Springboard${namePart}?`,
    t`Greetings To Springboard${namePart}`,
    t`Good to see you in Springboard${namePart}`,
  ];

  return _.sample(options) ?? "";
};
