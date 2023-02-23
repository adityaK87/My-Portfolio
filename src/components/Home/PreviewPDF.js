import React from "react";
import Resume from "../../assets/pdf/Aditya-Kumar-Resume.pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const PreviewPDF = () => {
	// const defaultLayoutPluginInstance = defaultLayoutPlugin();
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
			}}>
			<Worker
				workerUrl='https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js'
				style={{
					border: "1px solid rgba(0, 0, 0, 0.3)",
					width: "500px !important",
					height: "750px",
				}}>
				<Viewer
					fileUrl={Resume}
					// plugins={[defaultLayoutPluginInstance]}
				/>
			</Worker>
		</div>
	);
};

export default PreviewPDF;
