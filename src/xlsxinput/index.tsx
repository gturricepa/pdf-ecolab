/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useRef } from "react";
import * as S from "./styles";
import * as XLSX from "xlsx";
import { Upload, Select, message, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import type { UploadProps } from "antd";
import type { XlsxDriverData } from "./types";
import logoCepa from "../assets/logocepa.png";
import logo from "../assets/logo.jpg";
import Flag from "react-world-flags";

import Header from "../header";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { Chart1 } from "../chart1";
import { Chart2 } from "../chart2";
import { Critital } from "../crittical";
import { Comment } from "../comment";

const { Dragger } = Upload;
const { Option } = Select;

export const XlsxInput = () => {
  const { t } = useTranslation();

  const [data, setData] = useState<XlsxDriverData[]>([]);
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [pdfImage, setPdfImage] = useState<string | null>(null);
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target?.result;
      if (typeof binaryStr === "string" || binaryStr instanceof ArrayBuffer) {
        try {
          const workbook = XLSX.read(binaryStr, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json<XlsxDriverData>(sheet);
          setData(jsonData);
          message.success("Arquivo XLSX lido com sucesso!");
        } catch (err) {
          message.error("Erro ao processar o arquivo.");
        }
      }
    };
    reader.readAsBinaryString(file);
    return false;
  };

  const props: UploadProps = {
    name: "file",
    multiple: false,
    beforeUpload: handleFile,
    accept: ".xlsx",
    showUploadList: true,
  };

  // Ordenar os motoristas pelo nome antes de exibir
  const sortedData = [...data].sort((a, b) => {
    const nameA = a.Name.toLowerCase();
    const nameB = b.Name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  // Seleção direta pelo índice convertido de string para número
  const selectedDriver = selectedId
    ? sortedData[parseInt(selectedId)]
    : undefined;

  useEffect(() => {
    if (selectedDriver && pdfRef.current!) {
      setTimeout(() => {
        html2canvas(pdfRef.current!, {
          scale: 6,
          useCORS: true,
          backgroundColor: "#fff",
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          setPdfImage(imgData);
        });
      }, 100);
    }
  }, [selectedDriver, i18n.language]);

  const handleDownloadPDF = () => {
    if (!pdfImage) return;

    const pdf = new jsPDF("p", "mm", "a4");

    const img = new Image();
    img.src = pdfImage;

    img.onload = () => {
      const pxToMm = (px: number) => (px * 25.4) / 96;

      const imgWidthPx = img.width;
      const imgHeightPx = img.height;

      const imgWidthMm = pxToMm(imgWidthPx);
      const imgHeightMm = pxToMm(imgHeightPx);

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const ratio = Math.min(pageWidth / imgWidthMm, pageHeight / imgHeightMm);

      const renderWidth = imgWidthMm * ratio;
      const renderHeight = imgHeightMm * ratio;

      const offsetX = (pageWidth - renderWidth) / 2;
      const offsetY = 0;

      pdf.addImage(
        pdfImage,
        "PNG",
        offsetX,
        offsetY,
        renderWidth,
        renderHeight
      );
      pdf.save("driver-details.pdf");
    };
  };

  return (
    <S.Holder>
      <S.Content>
        {/* Painel lateral esquerdo */}
        <S.SelectContent>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag a xlsx file for this area.
            </p>
          </Dragger>

          {sortedData.length > 0 && (
            <Select
              style={{ width: "70%", marginTop: "1rem" }}
              placeholder="Select a driver"
              onChange={(value) => setSelectedId(value)}
              value={selectedId}
            >
              {sortedData.map((item, index) => (
                <Option key={index} value={index.toString()}>
                  {item.Name} {item["Last name"]}
                </Option>
              ))}
            </Select>
          )}

          {selectedDriver && (
            <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
              <Select
                defaultValue={i18n.language}
                style={{ width: 180 }}
                onChange={(lng) => i18n.changeLanguage(lng)}
              >
                <Option value="en">
                  <Flag
                    code="GB"
                    style={{ width: 20, height: 15, marginRight: 8 }}
                  />
                  English
                </Option>
                <Option value="es">
                  <Flag
                    code="ES"
                    style={{ width: 20, height: 15, marginRight: 8 }}
                  />
                  Español
                </Option>
                <Option value="nl">
                  <Flag
                    code="NL"
                    style={{ width: 20, height: 15, marginRight: 8 }}
                  />
                  Dutch
                </Option>
                <Option value="fr">
                  <Flag
                    code="FR"
                    style={{ width: 20, height: 15, marginRight: 8 }}
                  />
                  Français
                </Option>
                <Option value="de">
                  <Flag
                    code="DE"
                    style={{ width: 20, height: 15, marginRight: 8 }}
                  />
                  Deutsch
                </Option>
                <Option value="pl">
                  <Flag
                    code="PL"
                    style={{ width: 20, height: 15, marginRight: 8 }}
                  />
                  Polski
                </Option>
                <Option value="hr">
                  <Flag
                    code="HR"
                    style={{ width: 20, height: 15, marginRight: 8 }}
                  />
                  Hrvatski
                </Option>
                <Option value="it">
                  <Flag
                    code="IT"
                    style={{ width: 20, height: 15, marginRight: 8 }}
                  />
                  Italiano
                </Option>
              </Select>
              <Button type="primary" onClick={handleDownloadPDF}>
                Download PDF
              </Button>
            </div>
          )}

          <img src={logoCepa} style={{ marginTop: "2rem", width: "50%" }} />

          <span
            style={{
              marginTop: "1rem",
              fontWeight: "bold",
              fontSize: "2rem",
              color: "#414141",
            }}
          >
            PDF CREATOR
          </span>
        </S.SelectContent>

        {/* Área do PDF Preview */}
        {selectedDriver ? (
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <S.PdfSimulation ref={pdfRef}>
              <div className="logo-container">
                <img src={logoCepa} alt="Logo CEPA" />
              </div>
              <h3>{t("title")}</h3>
              <div className="pdf-content">
                <Header selectedDriver={selectedDriver} />
                <Chart1 selectedDriver={selectedDriver} />
                <Chart2 selectedDriver={selectedDriver} />
                <Critital selectedDriver={selectedDriver} />
                <Comment />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <img
                    src={logo}
                    style={{ width: "1.5rem", marginTop: ".5rem" }}
                  />
                </div>
              </div>
            </S.PdfSimulation>
          </div>
        ) : (
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <S.PdfSimulation>
              <span style={{ marginTop: "1rem" }}>
                Input a file and select a driver to see the PDF here
              </span>

              <S.Loader>
                <div className="loader"></div>
              </S.Loader>
            </S.PdfSimulation>
          </div>
        )}
      </S.Content>
    </S.Holder>
  );
};
