import { t } from "ttag";
import MetabaseSettings from "metabase/lib/settings";
import { useUniqueId } from "metabase/hooks/use-unique-id";
import { CardIcon, CardRoot, CardTitle } from "./HomeHelpCard.styled";

export const HomeHelpCard = (): JSX.Element => {
  const cardTitleId = useUniqueId();
  return (
    <CardRoot href={"https://conf.oetkerdigital.com/#all-updates"} aria-labelledby={cardTitleId}>
      <CardIcon name="reference" />
      <CardTitle id={cardTitleId}>{t`Springboard tips`}</CardTitle>
    </CardRoot>
  );
};
