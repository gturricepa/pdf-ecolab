/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";
import * as XLSX from "xlsx";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  pdf,
} from "@react-pdf/renderer";

const mmToPx = (mm: number) => (mm * 96) / 25.4;

const Teste = () => {
  const [data, setData] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [circleImg, setCircleImg] = useState<string | null>(null);
  const [squareImg, setSquareImg] = useState<string | null>(null);

  const circleRef = useRef<HTMLDivElement>(null);
  const squareRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Captura do círculo azul
  useEffect(() => {
    const captureCircle = async () => {
      if (circleRef.current) {
        const canvas = await html2canvas(circleRef.current);
        const imgData = canvas.toDataURL("image/png");
        setCircleImg(imgData);
      }
    };
    captureCircle();
  }, []);

  // Captura do quadrado verde
  useEffect(() => {
    const captureSquare = async () => {
      if (squareRef.current) {
        const canvas = await html2canvas(squareRef.current);
        const imgData = canvas.toDataURL("image/png");
        setSquareImg(imgData);
      }
    };
    captureSquare();
  }, []);

  // Função para gerar a imagem do header para um item
  const generateHeaderImage = async (item: any): Promise<string | null> => {
    return new Promise((resolve) => {
      if (!containerRef.current || !headerRef.current) return resolve(null);

      // Preenche dinamicamente os dados do header
      headerRef.current.innerHTML = `
        <div style="
          width: 100%;
          padding: 10px;
          background-color: #444;
          color: white;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
        ">
          ${item.nome || "Sem nome"} ${item.sobrenome || ""} - ${
        item.idade || "N/A"
      } anos
        </div>
      `;

      setTimeout(async () => {
        const canvas = await html2canvas(headerRef.current as HTMLElement);
        const imgData = canvas.toDataURL("image/png");
        resolve(imgData);
      }, 50); // pequeno delay para renderizar DOM
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const ab = e.target?.result;
        const workbook = XLSX.read(ab, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setData(jsonData);
        setSelectedItem(jsonData[0]);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleDownloadZip = async () => {
    const zip = new JSZip();

    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      const headerImg = await generateHeaderImage(item);

      const doc = (
        <Document>
          <Page style={styles.page}>
            <View style={styles.section}>
              {headerImg && (
                <Image
                  src={headerImg}
                  style={{ width: 400, height: 50, marginBottom: 10 }}
                />
              )}
              <Text>Nome: {item.nome}</Text>
              <Text>Sobrenome: {item.sobrenome}</Text>
              <Text>Idade: {item.idade}</Text>
              {circleImg && (
                <Image src={circleImg} style={{ width: 100, height: 100 }} />
              )}
              {squareImg && (
                <Image src={squareImg} style={{ width: 100, height: 100 }} />
              )}
            </View>
          </Page>
        </Document>
      );

      const pdfBlob = await pdf(doc).toBlob();
      const fileName = `${item.nome || "sem_nome"}_${
        item.sobrenome || "sem_sobrenome"
      }.pdf`;
      zip.file(fileName, pdfBlob);
    }

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "pdfs.zip");
    });
  };

  useEffect(() => {
    const generatePreview = async () => {
      if (selectedItem) {
        const headerImg = await generateHeaderImage(selectedItem);

        const doc = (
          <Document>
            <Page style={styles.page}>
              <View style={styles.section}>
                {headerImg && (
                  <Image
                    src={headerImg}
                    style={{ width: 400, height: 50, marginBottom: 10 }}
                  />
                )}
                <Text>Nome: {selectedItem.nome}</Text>
                <Text>Sobrenome: {selectedItem.sobrenome}</Text>
                <Text>Idade: {selectedItem.idade}</Text>
                {circleImg && (
                  <Image src={circleImg} style={{ width: 100, height: 100 }} />
                )}
                {squareImg && (
                  <Image src={squareImg} style={{ width: 100, height: 100 }} />
                )}
              </View>
            </Page>
          </Document>
        );

        const pdfBlob = await pdf(doc).toBlob();
        const blobUrl = URL.createObjectURL(pdfBlob);

        if (previewUrl) {
          URL.revokeObjectURL(previewUrl);
        }

        setPreviewUrl(blobUrl);
      }
    };

    generatePreview();

    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [selectedItem, circleImg, squareImg]);

  return (
    <div
      style={{ backgroundColor: "red", minHeight: "100vh", padding: "20px" }}
    >
      <h1>CEPA PDF CREATOR</h1>

      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="file-upload"
          style={{
            padding: "5px 10px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer",
            display: "inline-block",
          }}
        >
          Select a file
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
      </div>

      {/* Círculo azul */}
      <div
        ref={circleRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "blue",
          borderRadius: "50%",
        }}
      ></div>

      {/* Quadrado verde */}
      <div
        ref={squareRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "green",
          marginTop: "10px",
        }}
      ></div>

      {/* Header invisível */}
      <div
        ref={containerRef}
        style={{ position: "absolute", top: "-9999px", left: "-9999px" }}
      >
        <div ref={headerRef}></div>
      </div>

      {data.length > 0 && (
        <>
          <button style={{ marginTop: "20px" }} onClick={handleDownloadZip}>
            Download PDFs as ZIP
          </button>

          <div style={{ marginTop: "20px" }}>
            <label>Select an item to preview:</label>
            <select
              onChange={(e) => setSelectedItem(data[parseInt(e.target.value)])}
              style={{ marginLeft: "10px" }}
            >
              {data.map((item, index) => (
                <option key={index} value={index}>
                  {item.nome} {item.sobrenome}
                </option>
              ))}
            </select>
          </div>

          {previewUrl && (
            <div style={{ marginTop: "20px" }}>
              <iframe
                src={previewUrl}
                width="1000px"
                height="800px"
                title="PDF Preview"
                style={{ border: "1px solid #ccc" }}
              ></iframe>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    width: mmToPx(210),
    height: mmToPx(297),
  },
  section: {
    marginBottom: 10,
  },
});

export default Teste;
