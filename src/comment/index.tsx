import { useTranslation } from "react-i18next";
import * as S from "./styles";
import type { XlsxDriverData } from "../xlsxinput/types";
interface ChartProps {
  selectedDriver: XlsxDriverData;
}

export const Comment: React.FC<ChartProps> = ({ selectedDriver }) => {
  const { t } = useTranslation();

  return (
    <S.Holder>
      <h3>
        {" "}
        <S.Detail />
        {t("generalComments")}
      </h3>
      <span>{t(selectedDriver["General comments"])}</span>
    </S.Holder>
  );
};
