import React, { useState } from "react";
import i18n from "../../i18n/index";
import "./LanguageSelector.css";

const LanguageSelector = () => {
	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

	const chooseLanguage = (e) => {
		e.preventDefault();
		i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
		setSelectedLanguage(e.target.value);
		localStorage.setItem("lang", e.target.value);
	};

	return (
		<select
			className='dropdown '
			defaultValue={selectedLanguage}
			onChange={chooseLanguage}>
			<option className='dropdown-content' value='de'>
				German
			</option>
			<option className='dropdown-content' value='en'>
				English
			</option>
			<option className='dropdown-content' value='it'>
				Italian
			</option>
		</select>
	);
};

export default LanguageSelector;
