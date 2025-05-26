import type { XlsxDriverData } from "../xlsxinput/types";
import * as S from "./styles";
import red from "../assets/red.png";
import purple from "../assets/purple.png";
import yellow from "../assets/yellow.png";
import logocepa from "../assets/logocepa.png";
import chiqui from "../assets/chiqui.png";
import { useTranslation } from "react-i18next";

interface CertificadeProps {
  selectedDriver: XlsxDriverData;
}

export const Certificade: React.FC<CertificadeProps> = ({ selectedDriver }) => {
  const { t } = useTranslation();

  function excelDateToJSDate(
    serial: number | string,
    locale: string = "pt-BR"
  ): string | undefined {
    const excelEpoch = new Date(1899, 11, 30);
    const jsDate = new Date(excelEpoch.getTime() + Number(serial) * 86400000);

    return jsDate.toLocaleDateString(locale);
  }

  return (
    <S.Holder>
      <img
        src={red}
        alt="red"
        style={{
          position: "absolute",
          top: -45,
          left: -120,
          width: "20rem",
          height: "8rem",
        }}
      />
      <img
        src={purple}
        alt="purple"
        style={{ position: "absolute", bottom: -135, left: -170 }}
      />
      <img
        src={yellow}
        alt="yellow"
        style={{ position: "absolute", bottom: -455, right: -130 }}
      />
      <img
        src={logocepa}
        alt="logo"
        style={{
          marginBottom: "2.5rem",
          display: "flex",
          position: "absolute",
          top: 20,
          right: -55,
        }}
      />
      <h2>{t("Training Course")}</h2>
      <h2 style={{ fontSize: "3.5rem" }}>{t("Certificate")}</h2>
      <div style={{ marginBottom: "2rem" }}> </div>
      <h2>{t("This certificate is awarded to")}</h2>
      <h1>
        {selectedDriver.Name} {selectedDriver["Last name"]}
      </h1>
      <h3 style={{ margin: 0, marginBottom: ".2rem" }}>
        {t("For successfully completing the")} Behind the Wheel
      </h3>
      <h4 style={{ margin: 0 }}>
        {t(selectedDriver.Country)} -{" "}
        {excelDateToJSDate(selectedDriver["Application date"])}
      </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2rem",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "8rem",
            margin: "0rem",
            padding: 0,
          }}
        >
          <img
            alt="signature"
            src={chiqui}
            style={{
              width: "20rem",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
          />
          <p
            style={{
              borderTop: "1px solid black",
              marginTop: "5rem",
              paddingTop: "0.5rem",
              textAlign: "center",
              width: "20rem",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 0,
              position: "relative",
              zIndex: 0,
            }}
          >
            Francisco Millán Tanco
          </p>
          <p style={{ fontWeight: 100, margin: 0 }}>
            {t("Director of Operations")}
          </p>
          <p style={{ fontWeight: 100, margin: 0 }}>CEPA Mobility</p>
        </div>
      </div>
    </S.Holder>
  );
};
