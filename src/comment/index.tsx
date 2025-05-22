import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const Comment = () => {
  const { t } = useTranslation();

  return (
    <S.Holder>
      <h3>
        {" "}
        <S.Detail />
        {t("generalComments")}
      </h3>
      <span>{t("notApprovedReason")}</span>
    </S.Holder>
  );
};
