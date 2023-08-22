import { useTranslation } from "react-i18next";

export const ProjectData = () => {
	const { t } = useTranslation();
	const projectsData = [
		{
			projectName: "Name It!",
			projectDescription: t("PROJECT_DESCRIPTION.NAME_IT_DESCRIPTION"),
			imageUrl:
				"https://raw.githubusercontent.com/adityapal87/My-Portfolio/main/src/assets/name-it.PNG",
			projectUrl: "https://adityak87.github.io/Nameit/",
			codeUrl: "https://github.com/adityapal87/Nameit",
		},
		{
			projectName: "Typing-test",
			projectDescription: t(
				"PROJECT_DESCRIPTION.TYPING_TEST_DESCRIPTION"
			),
			imageUrl:
				"https://raw.githubusercontent.com/adityapal87/My-Portfolio/main/src/assets/typing-test.png",
			projectUrl: "https://adityak87.github.io/Typing-test/",
			codeUrl: "https://github.com/adityapal87/Typing-test",
		},
		{
			projectName: "PokemonSpace!",
			projectDescription: t(
				"PROJECT_DESCRIPTION.POKEMONSPACE_DESCRIPTION"
			),
			imageUrl:
				"https://raw.githubusercontent.com/adityapal87/My-Portfolio/main/src/assets/pokemonspace.png",
			projectUrl: "https://pokemonspace.netlify.app/",
			codeUrl: "https://github.com/adityapal87/PokemonSpace",
		},
		{
			projectName: "Portfolio Website",
			projectDescription: t("PROJECT_DESCRIPTION.PORTFOLIO_DESCRIPTION"),
			imageUrl:
				"https://raw.githubusercontent.com/adityapal87/My-Portfolio/main/src/assets/portfolio.png",
			projectUrl: "https://adityapal.netlify.app/",
			codeUrl: "https://github.com/adityapal87/My-Portfolio",
		},
		{
			projectName: "Marvel-Movies-App",
			projectDescription: t(
				"PROJECT_DESCRIPTION.MARVEL_MOVIES_DESCRIPTION"
			),
			imageUrl:
				"https://raw.githubusercontent.com/adityaK87/Marvel-Movies-App/main/src/assets/marvelbg.jpg",
			projectUrl: "https://gomarvel.netlify.app/",
			codeUrl: "https://github.com/adityaK87/Marvel-Movies-App",
		},
		{
			projectName: "Social-Media-Card",
			projectDescription: t(
				"PROJECT_DESCRIPTION.SOCIAL_MEDIA_CARD_DESCRIPTION"
			),
			imageUrl:
				"https://raw.githubusercontent.com/adityaK87/My-Portfolio/69d31981a4e3474bbfce5d0a6a1800161ad6681c/src/assets/social-media-app.png",
			projectUrl: "https://adityaprofiles.vercel.app/",
			codeUrl: "https://github.com/adityaK87/social-media-card",
		},
		{
			projectName: "Travel Saathi",
			projectDescription: t("PROJECT_DESCRIPTION.TRAVEL_APP_DESCRIPTION"),
			imageUrl:
				"https://github.com/adityaK87/Travel-Saathi/blob/main/src/img/screenShot.png?raw=true",
			projectUrl: "https://travel-saathi.netlify.app/",
			codeUrl: "https://github.com/adityaK87/Travel-Saathi",
		},
	];
	return projectsData;
};
