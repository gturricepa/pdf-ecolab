import type { XlsxDriverData } from "../xlsxinput/types";
import * as S from "./styles";
import logo from "../assets/logo.jpg";
import logocepa from "../assets/logocepa.png";
import { useTranslation } from "react-i18next";
import { PieChart, Pie, Cell } from "recharts";
import type { PieLabelRenderProps } from "recharts";

interface SecondData {
  selectedDriver: XlsxDriverData;
}

const COLORS_MAP: Record<string, string> = {
  "3": "#6bac96", // Applied
  "1": "#e3b303", // Trained and applied
  "0": "#c4575b", // Did not apply
};

const LEGEND_LABELS: Record<string, string> = {
  "3": "Applied",
  "1": "Trained and applied",
  "0": "Did not apply",
};

const moduleColumns: Record<string, string[]> = {
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

type CustomPieLabelProps = PieLabelRenderProps & {
  payload: {
    code: string;
    value: number;
    name: string;
  };
};

const renderLabelWithPercent = (props: CustomPieLabelProps) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, payload } = props;

  const cxNum = Number(cx);
  const cyNum = Number(cy);
  const inner = Number(innerRadius);
  const outer = Number(outerRadius);
  const angle = Number(midAngle);

  const RADIAN = Math.PI / 180;
  const radius = inner + (outer - inner) * 2;
  const x = cxNum + radius * Math.cos(-angle * RADIAN);
  const y = cyNum + radius * Math.sin(-angle * RADIAN);

  const fillColor = COLORS_MAP[payload.code] || "black";

  return (
    <text
      x={x}
      y={y}
      fill={fillColor}
      textAnchor={x > cxNum ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
    >
      {`${payload.value}%`}
    </text>
  );
};

export const Second: React.FC<SecondData> = ({ selectedDriver }) => {
  const { t } = useTranslation();

  const renderModuleSection = (moduleKey: string) => {
    const values = moduleColumns[moduleKey].map(
      (col) => selectedDriver[col as keyof XlsxDriverData]
    );

    const counts: Record<string, number> = { "0": 0, "1": 0, "3": 0 };

    values.forEach((val) => {
      const key = String(val);
      if (counts[key] !== undefined) counts[key]++;
    });

    const total = values.length;
    const pieData = Object.entries(counts)
      .filter(([, count]) => count > 0)
      .map(([key, count]) => ({
        name: LEGEND_LABELS[key],
        value: Number(((count / total) * 100).toFixed(2)),
        rawCount: count,
        code: key,
      }));

    // Gerar array de comentários
    const commentsArray =
      moduleKey === "module3"
        ? Array.from(
            { length: 6 },
            (_, i) =>
              selectedDriver[
                `Module 3_${i + 1} comments` as keyof XlsxDriverData
              ]
          ).filter(Boolean)
        : [
            selectedDriver[
              `Module ${moduleKey.replace(
                "module",
                ""
              )} comments` as keyof XlsxDriverData
            ],
          ].filter(Boolean);

    return (
      <S.Content key={moduleKey} style={{ flexDirection: "column" }}>
        <h3>
          <S.Detail />
          {t(`moduleLabels.${moduleKey}`)}:
        </h3>
        <S.Values>
          <S.Left>
            <p>Comments:</p>
            <S.Comments>
              {commentsArray.length > 0 ? (
                commentsArray.map((comment, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <S.Detail2 />
                    <p style={{ margin: 0, padding: 0, marginLeft: ".3rem" }}>
                      {t(String(comment))}
                    </p>
                  </div>
                ))
              ) : (
                <p>No comments</p>
              )}
            </S.Comments>
          </S.Left>
          <S.Right>
            <PieChart width={180} height={110}>
              <Pie
                isAnimationActive={false}
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={30}
                innerRadius={20}
                label={renderLabelWithPercent}
                labelLine={false}
              >
                {pieData.map((entry) => (
                  <Cell key={entry.code} fill={COLORS_MAP[entry.code]} />
                ))}
              </Pie>
            </PieChart>

            <div>
              {["3", "1", "0"].map((key) => (
                <div
                  key={key}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    marginBottom: 4,
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: COLORS_MAP[key],
                      borderRadius: 4,
                      border: "1px solid #ccc",
                    }}
                  />
                  <p
                    style={{
                      fontSize: 11,
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {LEGEND_LABELS[key]}
                  </p>
                </div>
              ))}
            </div>
          </S.Right>
        </S.Values>
        <span
          style={{
            width: "100%",
            borderBottom: "1px dashed lightgray",
            marginTop: ".5rem",
            marginBottom: ".5rem",
          }}
        />
      </S.Content>
    );
  };

  return (
    <S.Holder>
      <img
        src={logo}
        alt="logo"
        style={{ position: "absolute", width: "1.5rem", bottom: 0, right: 0 }}
      />
      <img
        src={logocepa}
        alt="logo"
        style={{ position: "absolute", width: "10rem", top: 0, left: 0 }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "3rem",
          gap: "1rem",
        }}
      >
        {Object.keys(moduleColumns).map((moduleKey) =>
          renderModuleSection(moduleKey)
        )}
      </div>
    </S.Holder>
  );
};
