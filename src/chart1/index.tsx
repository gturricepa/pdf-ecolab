import type { XlsxDriverData } from "../xlsxinput/types";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
interface ChartProps {
  selectedDriver: XlsxDriverData;
}

// Função para quebrar o texto em múltiplas linhas
const breakText = (text: string, maxLength = 15) => {
  const words = text.split(" ");
  let currentLine = "";
  const lines = [];

  words.forEach((word) => {
    if (currentLine.length + word.length + 1 <= maxLength) {
      currentLine += (currentLine.length ? " " : "") + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  });

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
};

export const Chart1: React.FC<ChartProps> = ({ selectedDriver }) => {
  const totalModules = 53;

  const scores = Object.entries(selectedDriver)
    .filter(([key]) => {
      const numKey = Number(key);
      return numKey >= 1 && numKey <= 53;
    })
    .reduce(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (acc, [_, value]) => {
        const num = Number(value);
        if (num === 3) acc.count3 += 1;
        else if (num === 1) acc.count1 += 1;
        else if (num === 0) acc.count0 += 1;
        return acc;
      },
      { count3: 0, count1: 0, count0: 0 }
    );

  const percentage3 = ((scores.count3 / totalModules) * 100).toFixed(2);
  const percentage1 = ((scores.count1 / totalModules) * 100).toFixed(2);
  const percentage0 = ((scores.count0 / totalModules) * 100).toFixed(2);

  const totalOptionalFields = 9;

  const validCount = Object.entries(selectedDriver).filter(([key, value]) => {
    const numKey = Number(key);
    return numKey >= 54 && numKey <= 62 && value !== "NA";
  }).length;

  const validPercentage = ((validCount / totalOptionalFields) * 100).toFixed(2);

  const { t } = useTranslation();

  const appliedText = t("appliedWithoutAssistance");
  const appliedWithTraining = t("appliedWithTraining");
  const opportunityArea = t("opportunityArea");
  const criticalElements = t("criticalElements");

  const appliedLines = breakText(appliedText);
  const trainingLines = breakText(appliedWithTraining);
  const opportunityLines = breakText(opportunityArea);
  const criticalLines = breakText(criticalElements);

  return (
    <S.Holder>
      <h3>
        <S.Detail />
        {t("performanceReview")}
      </h3>
      <svg width="300" height="300" viewBox="0 0 300 300">
        {/* Segmentos em arco com margem interna maior */}
        <path
          d="M150,50 A100,100 0 0,1 250,150"
          fill="none"
          stroke="#6bac96"
          strokeWidth="80"
        />
        <path
          d="M250,150 A100,100 0 0,1 150,250"
          fill="none"
          stroke="#c4575b"
          strokeWidth="80"
        />
        <path
          d="M150,250 A100,100 0 0,1 50,150"
          fill="none"
          stroke="#e3b303"
          strokeWidth="80"
        />
        <path
          d="M50,150 A100,100 0 0,1 150,50"
          fill="none"
          stroke="#3b6c67"
          strokeWidth="80"
        />

        {/* Cruz branca */}
        <line
          x1="150"
          y1="0"
          x2="150"
          y2="300"
          stroke="white"
          strokeWidth="8"
        />
        <line
          x1="0"
          y1="150"
          x2="300"
          y2="150"
          stroke="white"
          strokeWidth="8"
        />

        {/* Círculos brancos nas divisões */}
        <circle cx="250" cy="150" r="15" fill="white" />
        <circle cx="150" cy="50" r="15" fill="white" />
        <circle cx="50" cy="150" r="15" fill="white" />
        <circle cx="150" cy="250" r="15" fill="white" />

        {/* Setas nas divisões */}
        <text
          x="50"
          y="167"
          textAnchor="middle"
          fontSize="25"
          fill="black"
          fontWeight="bold"
          transform="rotate(270 45 155)"
        >
          &gt;
        </text>
        <text
          x="150"
          y="57"
          textAnchor="middle"
          fontSize="25"
          fill="black"
          fontWeight="bold"
          transform="rotate(360 150 54)"
        >
          &gt;
        </text>
        <text
          x="245"
          y="162"
          textAnchor="middle"
          fontSize="25"
          fill="black"
          fontWeight="bold"
          transform="rotate(90 250 155)"
        >
          &gt;
        </text>
        <text
          x="150"
          y="265"
          textAnchor="middle"
          fontSize="25"
          fill="black"
          fontWeight="bold"
          transform="rotate(180 150 254)"
        >
          &gt;
        </text>

        {/* Textos nos quadrantes */}
        {/* 
        <text
          x="150"
          y="155"
          textAnchor="middle"
          fontSize="24"
          fill="#414141"
          fontWeight="bold"
        >
          {(Number(selectedDriver.Average) * 10).toFixed(2)}%
        </text> */}

        <text
          x="87"
          y="70"
          textAnchor="middle"
          fill="white"
          fontWeight="bold"
          fontSize="20"
        >
          {percentage3}%
        </text>
        <text x="105" y="90" textAnchor="middle" fill="white" fontSize="11">
          {appliedLines.map((line, index) => (
            <tspan key={index} x="75" dy={index === 0 ? 0 : 14}>
              {line}
            </tspan>
          ))}
        </text>

        <text
          x="220"
          y="70"
          textAnchor="middle"
          fill="white"
          fontWeight="bold"
          fontSize="20"
        >
          {percentage1}%
        </text>
        <text x="225" y="90" textAnchor="middle" fill="white" fontSize="11">
          {trainingLines.map((line, index) => (
            <tspan key={index} x="225" dy={index === 0 ? 0 : 14}>
              {line}
            </tspan>
          ))}
        </text>

        <text
          x="230"
          y="195"
          textAnchor="middle"
          fill="white"
          fontWeight="bold"
          fontSize="20"
        >
          {validPercentage}%
        </text>
        <text x="220" y="210" textAnchor="middle" fill="white" fontSize="11">
          {criticalLines.map((line, index) => (
            <tspan key={index} x="220" dy={index === 0 ? 0 : 14}>
              {line}
            </tspan>
          ))}
        </text>

        <text
          x="67"
          y="195"
          textAnchor="middle"
          fill="white"
          fontWeight="bold"
          fontSize="20"
        >
          {percentage0}%
        </text>
        <text x="83" y="210" textAnchor="middle" fill="white" fontSize="11">
          {opportunityLines.map((line, index) => (
            <tspan key={index} x="83" dy={index === 0 ? 0 : 14}>
              {line}
            </tspan>
          ))}
        </text>
      </svg>
    </S.Holder>
  );
};
