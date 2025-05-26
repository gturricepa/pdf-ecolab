/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useRef } from "react";
import * as S from "./styles";
import * as XLSX from "xlsx";
import { Upload, Select, message, Button, DatePicker } from "antd";
import { InboxOutlined, LoadingOutlined } from "@ant-design/icons";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import type { UploadProps } from "antd";
import type { XlsxDriverData } from "./types";
import logoCepa from "../assets/logocepa.png";
import logo from "../assets/logo.jpg";
import Flag from "react-world-flags";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import Header from "../header";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { Chart1 } from "../chart1";
import { Chart2 } from "../chart2";
import { Critital } from "../crittical";
import { Comment } from "../comment";
import { Certificade } from "../certificade";
import moment from "moment";
import { Second } from "../second";

const { RangePicker } = DatePicker;
const { Dragger } = Upload;
const { Option } = Select;

export const XlsxInput = () => {
  const { t } = useTranslation();

  const [applicationDateRange, setApplicationDateRange] = useState<
    [moment.Moment, moment.Moment] | null
  >(null);

  const [data, setData] = useState<XlsxDriverData[]>([]);
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [pdfImage, setPdfImage] = useState<string | null>(null);
  const [certificadeImg, setcertificadeImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"report" | "certificate">("report");
  const [downloadProgress, setDownloadProgress] = useState<{
    current: number;
    total: number;
  } | null>(null);

  const pdfRef = useRef<HTMLDivElement>(null);
  const certicadeRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  const countries = Array.from(
    new Set(data.map((item) => item.Country))
  ).sort();

  function excelDateToJSDate(serial: number): Date {
    const utc_days = Math.floor(serial - 25569);
    const utc_value = utc_days * 86400;
    const date_info = new Date(utc_value * 1000);

    const fractional_day = serial - Math.floor(serial) + 0.0000001;

    let total_seconds = Math.floor(86400 * fractional_day);

    const seconds = total_seconds % 60;
    total_seconds -= seconds;

    const hours = Math.floor(total_seconds / 3600);
    const minutes = Math.floor((total_seconds % 3600) / 60);

    return new Date(
      date_info.getFullYear(),
      date_info.getMonth(),
      date_info.getDate(),
      hours,
      minutes,
      seconds
    );
  }

  const filteredData =
    selectedCountries.length > 0 || applicationDateRange
      ? data.filter((item) => {
          const matchCountry =
            selectedCountries.length === 0 ||
            selectedCountries.includes(item.Country);

          const rawDate = item["Application date"];
          const isValidDate = !isNaN(Number(rawDate));

          if (!isValidDate) return false;

          const appDate = excelDateToJSDate(Number(rawDate));

          const matchDate =
            !applicationDateRange ||
            (appDate >= applicationDateRange[0].toDate() &&
              appDate <= applicationDateRange[1].toDate());

          return matchCountry && matchDate;
        })
      : data;
  const sortedData = [...filteredData].sort((a, b) =>
    a.Name.toLowerCase().localeCompare(b.Name.toLowerCase())
  );

  const selectedDriver = selectedId
    ? sortedData[parseInt(selectedId)]
    : undefined;

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
          console.error(err);
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

  useEffect(() => {
    if (selectedDriver) {
      if (pdfRef.current) {
        setTimeout(() => {
          html2canvas(pdfRef.current!, {
            scale: 4,
            useCORS: true,
            backgroundColor: "#fff",
          }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            setPdfImage(imgData);
          });
        }, 100);
      }

      if (certicadeRef.current) {
        setTimeout(() => {
          html2canvas(certicadeRef.current!, {
            scale: 4,
            useCORS: true,
            backgroundColor: "#fff",
          }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            setcertificadeImg(imgData);
          });
        }, 100);
      }
    }
  }, [selectedDriver, i18n.language, viewMode]);

  const pxToMm = (px: number) => (px * 25.4) / 96;

  const handleDownloadPDF = async () => {
    console.log("entrou");
    if (!pdfRef.current || !secondRef.current || !selectedDriver) return;
    console.log("passou");

    const pdf = new jsPDF("p", "mm", "a4");

    const canvasReport = await html2canvas(pdfRef.current, {
      scale: 6,
      useCORS: true,
      backgroundColor: "#fff",
    });

    const imgDataReport = canvasReport.toDataURL("image/png");

    const imgReport = new Image();
    imgReport.src = imgDataReport;

    await new Promise((resolve) => {
      imgReport.onload = () => {
        const imgWidthMm = pxToMm(imgReport.width);
        const imgHeightMm = pxToMm(imgReport.height);
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const ratio = Math.min(
          pageWidth / imgWidthMm,
          pageHeight / imgHeightMm
        );
        const renderWidth = imgWidthMm * ratio;
        const renderHeight = imgHeightMm * ratio;
        const offsetX = (pageWidth - renderWidth) / 2;
        const offsetY = 0;

        pdf.addImage(
          imgDataReport,
          "PNG",
          offsetX,
          offsetY,
          renderWidth,
          renderHeight
        );
        resolve(null);
      };
    });

    const canvasSecond = await html2canvas(secondRef.current, {
      scale: 6,
      useCORS: true,
      backgroundColor: "#fff",
    });

    const imgDataSecond = canvasSecond.toDataURL("image/png");

    pdf.addPage();
    const imgSecond = new Image();
    imgSecond.src = imgDataSecond;

    await new Promise((resolve) => {
      imgSecond.onload = () => {
        const imgWidthMm = pxToMm(imgSecond.width);
        const imgHeightMm = pxToMm(imgSecond.height);
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const ratio = Math.min(
          pageWidth / imgWidthMm,
          pageHeight / imgHeightMm
        );
        const renderWidth = imgWidthMm * ratio;
        const renderHeight = imgHeightMm * ratio;
        const offsetX = (pageWidth - renderWidth) / 2;
        const offsetY = 0;

        pdf.addImage(
          imgDataSecond,
          "PNG",
          offsetX,
          offsetY,
          renderWidth,
          renderHeight
        );
        resolve(null);
      };
    });

    pdf.save(
      `driver_details_${selectedDriver.Name}_${selectedDriver["Last name"]}.pdf`
    );

    if (selectedDriver.Rating === "Not approved") return;

    handleDownloadCertificatePDF();
  };

  const handleDownloadCertificatePDF = async () => {
    if (!certicadeRef.current) return;

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 400));

    try {
      const canvasCert = await html2canvas(certicadeRef.current, {
        scale: 6,
        useCORS: true,
        backgroundColor: "#fff",
      });

      const imgDataCert = canvasCert.toDataURL("image/png");

      const pdfCert = new jsPDF("l", "mm", "a4");

      const pageWidth = pdfCert.internal.pageSize.getWidth();
      const pageHeight = pdfCert.internal.pageSize.getHeight();

      pdfCert.addImage(imgDataCert, "PNG", 0, 0, pageWidth, pageHeight);

      pdfCert.save(
        `driver_certificate_${selectedDriver?.Name}_${selectedDriver?.["Last name"]}.pdf`
      );

      setLoading(false);
    } catch (err) {
      console.error("Erro ao gerar certificado PDF:", err);
      setLoading(false);
    }
  };

  const handleDownloadAll = async () => {
    const zip = new JSZip();
    const total = sortedData.length;
    let current = 0;

    setDownloadProgress({ current: 0, total });
    setLoading(true);

    for (let i = 0; i < total; i++) {
      const driver = sortedData[i];
      setSelectedId(i.toString());
      setViewMode("report");

      await new Promise((resolve) => setTimeout(resolve, 400));

      // PDF Report - primeira página
      const canvasReport = await html2canvas(pdfRef.current!, {
        scale: 6,
        useCORS: true,
        backgroundColor: "#fff",
      });

      const imgDataReport = canvasReport.toDataURL("image/png");
      const pdfReport = new jsPDF("p", "mm", "a4");
      const imgReport = new Image();
      imgReport.src = imgDataReport;

      await new Promise((res) => {
        imgReport.onload = () => {
          const imgWidthMm = pxToMm(imgReport.width);
          const imgHeightMm = pxToMm(imgReport.height);
          const pageWidth = pdfReport.internal.pageSize.getWidth();
          const pageHeight = pdfReport.internal.pageSize.getHeight();
          const ratio = Math.min(
            pageWidth / imgWidthMm,
            pageHeight / imgHeightMm
          );
          const renderWidth = imgWidthMm * ratio;
          const renderHeight = imgHeightMm * ratio;
          const offsetX = (pageWidth - renderWidth) / 2;
          const offsetY = 0;

          pdfReport.addImage(
            imgDataReport,
            "PNG",
            offsetX,
            offsetY,
            renderWidth,
            renderHeight
          );
          res(null);
        };
      });

      // PDF Report - segunda página
      const canvasSecond = await html2canvas(secondRef.current!, {
        scale: 6,
        useCORS: true,
        backgroundColor: "#fff",
      });

      const imgDataSecond = canvasSecond.toDataURL("image/png");
      const imgSecond = new Image();
      imgSecond.src = imgDataSecond;

      await new Promise((res) => {
        imgSecond.onload = () => {
          pdfReport.addPage();

          const imgWidthMm = pxToMm(imgSecond.width);
          const imgHeightMm = pxToMm(imgSecond.height);
          const pageWidth = pdfReport.internal.pageSize.getWidth();
          const pageHeight = pdfReport.internal.pageSize.getHeight();
          const ratio = Math.min(
            pageWidth / imgWidthMm,
            pageHeight / imgHeightMm
          );
          const renderWidth = imgWidthMm * ratio;
          const renderHeight = imgHeightMm * ratio;
          const offsetX = (pageWidth - renderWidth) / 2;
          const offsetY = 0;

          pdfReport.addImage(
            imgDataSecond,
            "PNG",
            offsetX,
            offsetY,
            renderWidth,
            renderHeight
          );

          const reportBuffer = pdfReport.output("arraybuffer");
          zip.file(
            `report_${driver.Name}_${driver["Last name"]}.pdf`,
            reportBuffer
          );

          res(null);
        };
      });

      // PDF Certificate (apenas para aprovados)
      if (driver.Rating !== "Not approved") {
        setViewMode("certificate");
        await new Promise((resolve) => setTimeout(resolve, 400));

        const canvasCert = await html2canvas(certicadeRef.current!, {
          scale: 6,
          useCORS: true,
          backgroundColor: "#fff",
        });

        const imgDataCert = canvasCert.toDataURL("image/png");
        const pdfCert = new jsPDF("l", "mm", "a4");
        const imgCert = new Image();
        imgCert.src = imgDataCert;

        await new Promise((res) => {
          imgCert.onload = () => {
            const imgWidthMm = pxToMm(imgCert.width);
            const imgHeightMm = pxToMm(imgCert.height);
            const pageWidth = pdfCert.internal.pageSize.getWidth();
            const pageHeight = pdfCert.internal.pageSize.getHeight();

            // Mantém a proporção da imagem
            const ratio = Math.min(
              pageWidth / imgWidthMm,
              pageHeight / imgHeightMm
            );
            const renderWidth = imgWidthMm * ratio;
            const renderHeight = imgHeightMm * ratio;

            const offsetX = (pageWidth - renderWidth) / 2;
            const offsetY = (pageHeight - renderHeight) / 2;

            pdfCert.addImage(
              imgDataCert,
              "PNG",
              offsetX,
              offsetY,
              renderWidth,
              renderHeight
            );

            const certBuffer = pdfCert.output("arraybuffer");
            zip.file(
              `certificate_${driver.Name}_${driver["Last name"]}.pdf`,
              certBuffer
            );

            res(null);
          };
        });
      }

      current += 1;
      setDownloadProgress({ current, total });
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, "drivers_documents.zip");

    setLoading(false);
    setDownloadProgress(null);
  };

  return (
    <S.Holder>
      <S.Content>
        <S.SelectContent
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Dragger {...props} style={{ maxWidth: "320px" }}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag a xlsx file for this area.
            </p>
          </Dragger>

          {countries && (
            <Select
              mode="multiple"
              allowClear
              placeholder={"Filter by Country"}
              style={{ width: "16rem" }}
              onChange={(value) => {
                setSelectedCountries(value as string[]);
                setSelectedId(undefined);
              }}
              value={selectedCountries}
            >
              {countries.map((country) => (
                <Option key={country} value={country}>
                  {country}
                </Option>
              ))}
            </Select>
          )}

          {sortedData && (
            <RangePicker
              format="DD/MM/YYYY"
              style={{ width: "16rem" }}
              onChange={(dates) =>
                setApplicationDateRange(
                  dates as [moment.Moment, moment.Moment] | null
                )
              }
              allowClear
              placeholder={["Start Date", "End Date"]}
            />
          )}

          {sortedData && (
            <Select
              style={{ width: "16rem" }}
              placeholder={"Select a Driver"}
              onChange={(value) => setSelectedId(value)}
              value={selectedId}
              allowClear
            >
              {sortedData.map((item, index) => (
                <Option key={index} value={index.toString()}>
                  {item.Name} {item["Last name"]}
                </Option>
              ))}
            </Select>
          )}

          {selectedDriver && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "1rem",
                maxWidth: "16rem",
                width: "100%",
              }}
            >
              <Select
                defaultValue={i18n.language}
                style={{ width: "100%" }}
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

              <Button
                style={{ width: "100%" }}
                type="primary"
                onClick={handleDownloadPDF}
              >
                Download PDF
              </Button>
              <Button
                style={{ width: "100%" }}
                type="primary"
                onClick={handleDownloadAll}
              >
                Download All
              </Button>
            </div>
          )}

          {loading && (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "1rem",
              }}
            >
              <LoadingOutlined />
              Downloading
            </span>
          )}

          {downloadProgress && (
            <span style={{ textAlign: "center", marginTop: "0.5rem" }}>
              {downloadProgress.current} of {downloadProgress.total}
            </span>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <img src={logoCepa} alt="Logo CEPA" style={{ width: "12rem" }} />
            <span
              style={{
                marginTop: "1rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "#414141",
              }}
            >
              PDF CREATOR
            </span>
          </div>
        </S.SelectContent>

        {selectedDriver ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: "1200px",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                position: "relative",
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
                  <Comment selectedDriver={selectedDriver} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      position: "absolute",
                      right: 10,
                      bottom: 10,
                    }}
                  >
                    <img
                      src={logo}
                      style={{ width: "1.5rem", marginTop: ".5rem" }}
                      alt="Logo"
                    />
                  </div>
                </div>
              </S.PdfSimulation>

              <span
                style={{
                  width: "100%",
                  borderBottom: "1px dashed lightgray",
                  margin: 0,
                  padding: 0,
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                -------------------------------------------------------------------------------------------------------------------
              </span>

              <S.PdfSimulation2 ref={secondRef}>
                <Second selectedDriver={selectedDriver} />
              </S.PdfSimulation2>
            </div>

            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
              }}
            >
              <S.PdfSimulationHorizontal ref={certicadeRef}>
                <Certificade selectedDriver={selectedDriver} />
              </S.PdfSimulationHorizontal>
            </div>
          </div>
        ) : (
          <div
            style={{
              minWidth: "1200px",
              display: "flex",
              justifyContent: "center",
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
