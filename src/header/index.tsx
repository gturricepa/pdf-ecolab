import React from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import type { XlsxDriverData } from "../xlsxinput/types";

interface HeaderProps {
  selectedDriver: XlsxDriverData;
}

const Header: React.FC<HeaderProps> = ({ selectedDriver }) => {
  const { t } = useTranslation();
  //#3B6C67dark green
  //#6BAC96 lightgreen
  //#E3B303 yellow
  // #C4575B
  console.log(selectedDriver);

  function excelDateToJSDate(
    serial: number | string,
    locale: string = "pt-BR"
  ): string | undefined {
    if (serial === "Permanent") return "Permanent";

    const excelEpoch = new Date(1899, 11, 30);
    const jsDate = new Date(excelEpoch.getTime() + Number(serial) * 86400000);

    if (jsDate.getFullYear() === 2023) return "N/A";

    return jsDate.toLocaleDateString(locale);
  }
  return (
    <S.Holder>
      <S.SectionHolder>
        <S.Section>
          <span>
            <p>{t("fullName")}:</p>
            <div>
              {selectedDriver.Name} {selectedDriver["Last name"]}
            </div>
          </span>
          <span>
            <p>{t("company")}:</p>
            <div>{selectedDriver.Company}</div>
          </span>

          <span>
            <p>{t("activityDue")}:</p>
            <div>{selectedDriver["Course ID"]}</div>
          </span>
        </S.Section>

        <S.Section>
          <span>
            <p>{t("activityName")}:</p>
            <div>BTW</div>
          </span>

          <span>
            <p>{t("transmissionType")}:</p>
            <div>{t(selectedDriver.Transmission)}</div>
          </span>
          <span>
            <p>{t("licenseDue")}:</p>
            <div>{excelDateToJSDate(selectedDriver["License expiration"])}</div>
          </span>
        </S.Section>
        <S.Section2>
          <span>
            <p>{t("yearsExperience")}:</p>
            <div>{t(selectedDriver["Years of experience"])}</div>{" "}
          </span>
          <span>
            <p>{t("country")}:</p>
            <div>{t(selectedDriver.Country).toUpperCase()}</div>
          </span>
          <span>
            <p>{t("resultObtained")}:</p>
            <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
              {t(selectedDriver.Rating)}
            </div>
          </span>
        </S.Section2>
      </S.SectionHolder>
    </S.Holder>
  );
};

export default Header;
