import { useTranslation } from "react-i18next";
import type { XlsxDriverData } from "../xlsxinput/types";
import * as S from "./styles";

interface CriticalProps {
  selectedDriver: XlsxDriverData;
}

export const Critital: React.FC<CriticalProps> = ({ selectedDriver }) => {
  const { t } = useTranslation();

  function checkDetection(value: string): string {
    return value === "NA" ? t("NOT DETECTED") : t("DETECTED");
  }

  const relevantColumns = [
    selectedDriver[54],
    selectedDriver[55],
    selectedDriver[56],
    selectedDriver[57],
    selectedDriver[58],
    selectedDriver[59],
    selectedDriver[60],
    selectedDriver[61],
    selectedDriver[62],
  ];

  return (
    <S.Holder>
      <h3>
        <S.Detail /> {t("criticalElementsIdentified")}
      </h3>
      <S.SectionHolder>
        <S.Section>
          <S.Item>
            <div>
              <span>{t("inadequateSpeed")}</span>
              <p
                style={{
                  color:
                    checkDetection(String(relevantColumns[0])) === "DETECTED"
                      ? "red"
                      : "inherit",
                }}
              >
                {checkDetection(String(relevantColumns[0]))}
              </p>
            </div>
            <div>
              <span>{t("trafficViolation")}</span>
              <p
                style={{
                  color:
                    checkDetection(String(relevantColumns[1])) === "DETECTED"
                      ? "red"
                      : "inherit",
                }}
              >
                {checkDetection(String(relevantColumns[1]))}
              </p>
            </div>
            <div>
              <span>{t("aggressiveness")}</span>
              <p
                style={{
                  color:
                    checkDetection(String(relevantColumns[2])) === "DETECTED"
                      ? "red"
                      : "inherit",
                }}
              >
                {checkDetection(String(relevantColumns[2]))}
              </p>
            </div>
          </S.Item>
        </S.Section>
        <S.Section>
          <S.Item>
            <div>
              <span>{t("distractionWhileDriving")}</span>
              <p
                style={{
                  color:
                    checkDetection(String(relevantColumns[3])) === "DETECTED"
                      ? "red"
                      : "inherit",
                }}
              >
                {checkDetection(String(relevantColumns[3]))}
              </p>
            </div>
            <div>
              <span>{t("doesNotTransmitSecurity")}</span>
              <p
                style={{
                  color:
                    checkDetection(String(relevantColumns[4])) === "DETECTED"
                      ? "red"
                      : "inherit",
                }}
              >
                {checkDetection(String(relevantColumns[4]))}
              </p>
            </div>
            <div>
              <span>{t("doesNotCoordinateGearbox")}</span>
              <p
                style={{
                  color:
                    checkDetection(String(relevantColumns[5])) === "DETECTED"
                      ? "red"
                      : "inherit",
                }}
              >
                {checkDetection(String(relevantColumns[5]))}
              </p>
            </div>
          </S.Item>
        </S.Section>
        <S.Section>
          <S.Item>
            <div>
              <span>{t("recklessDriving")}</span>
              <p
                style={{
                  color:
                    checkDetection(String(relevantColumns[6])) === "DETECTED"
                      ? "red"
                      : "inherit",
                }}
              >
                {checkDetection(String(relevantColumns[6]))}
              </p>
            </div>
            <div>
              <span>{t("noDrivingExperience")}</span>
              <p
                style={{
                  color:
                    checkDetection(String(relevantColumns[7])) === "DETECTED"
                      ? "red"
                      : "inherit",
                }}
              >
                {checkDetection(String(relevantColumns[7]))}
              </p>
            </div>
            <div>
              <span>{t("newness")}</span>
              <p
                style={{
                  color:
                    checkDetection(String(relevantColumns[8])) === "DETECTED"
                      ? "red"
                      : "inherit",
                }}
              >
                {checkDetection(String(relevantColumns[8]))}
              </p>
            </div>
          </S.Item>
        </S.Section>
      </S.SectionHolder>
    </S.Holder>
  );
};
