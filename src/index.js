import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading....</div>}>
			<HashRouter>
				<App />
			</HashRouter>
		</Suspense>
	</React.StrictMode>
);
