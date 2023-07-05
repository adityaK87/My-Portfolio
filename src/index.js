import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HashRouter>
			<Suspense fallback={<div>Loading....</div>}>
				<App />
			</Suspense>
		</HashRouter>
	</React.StrictMode>
);
