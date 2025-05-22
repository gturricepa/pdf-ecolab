/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { XlsxDriverData } from "../xlsxinput/types";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface ChartProps {
  selectedDriver: XlsxDriverData;
}

export const Chart2: React.FC<ChartProps> = ({ selectedDriver }) => {
  const { t } = useTranslation();

  const moduleColumns = {
    module1: ["1", "2"],
    module2: ["3", "4", "5", "6", "7", "8"],
    module3: [
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
    ],
    module4: ["36", "37", "38", "39", "40", "41", "42", "43"],
    module5: ["44", "45", "46", "47", "48", "49", "50"],
    module6: ["51", "52", "53"],
  };

  const calculatePercentage = (
    columns: string[],
    driverData: XlsxDriverData
  ) => {
    const sum = columns.reduce((acc, col) => {
      const value = driverData[col as keyof XlsxDriverData];
      return value === "NA"
        ? acc
        : acc + (isNaN(Number(value)) ? 0 : Number(value));
    }, 0);

    const max = columns.length * 3;
    const percentage = Math.min((sum / max) * 100, 100);
    return parseFloat(percentage.toFixed(2));
  };

  const getBarColor = (percentage: number) => {
    if (percentage >= 80) {
      return "#3B6C67";
    } else if (percentage >= 60) {
      return "#E3B303";
    } else {
      return "#C4575B";
    }
  };

  const calculateModulePercentages = (driverData: XlsxDriverData) => {
    return Object.keys(moduleColumns).map((moduleKey) => {
      const columns = moduleColumns[moduleKey as keyof typeof moduleColumns];
      const percentage = calculatePercentage(columns, driverData);
      const color = getBarColor(percentage);
      const label = t(`moduleLabels.${moduleKey}`, moduleKey); // fallback
      return { module: label, percentage, color };
    });
  };

  const modulePercentages = calculateModulePercentages(selectedDriver);

  const renderCenteredTick = ({ y, payload }: any) => {
    return (
      <text
        x={110}
        y={y}
        dy={6}
        textAnchor="middle"
        fill="#8d8d8d"
        fontSize={11}
      >
        {payload.value}
      </text>
    );
  };

  return (
    <S.Holder>
      <h3>
        <S.Detail /> {t("safeDrivingBySegment")}
      </h3>
      <ResponsiveContainer
        width="100%"
        height={200}
        style={{
          backgroundColor: "#ebe8e879",
          borderRadius: "10px",
          marginTop: "1rem",
          paddingRight: ".7rem",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          padding: "0",
        }}
      >
        <BarChart data={modulePercentages} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            fontSize={11}
          />
          <YAxis
            type="category"
            dataKey="module"
            tick={renderCenteredTick}
            width={210}
          />
          <Bar isAnimationActive={false} dataKey="percentage">
            {modulePercentages.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </S.Holder>
  );
};
