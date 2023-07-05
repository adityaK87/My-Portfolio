import React from "react";
import "./Contact.css";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import { VscGithubInverted } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { BiSend } from "react-icons/bi";
import Peerlist from "../../assets/peerlist.png";
import { useTranslation } from "react-i18next";

const Contact = () => {
	console.log(useTranslation);
	const { t } = useTranslation();
	return (
		<div className='section-container'>
			<Header
				heading={t("CONTACT_PAGE_CONTENT.CONTACT_PAGE_HEADING")}
				details={t("CONTACT_PAGE_CONTENT.CONTACT_PAGE_DETAIL")}
			/>

			{/* contact form container */}
			<div className='contact-form-container'>
				<form
					className='contact-form'
					action='https://formspree.io/f/mnqrzzkd'
					method='POST'>
					<input
						type='email'
						placeholder={t("CONTACT_FORM.EMAIL_PLACEHOLDER")}
						name='email'
						className='input-box email-input'
						required
					/>
					{/* Email body */}
					<textarea
						type='text'
						placeholder={t("CONTACT_FORM.MESSAGE_PLACEHOLDER")}
						name='message'
						className='input-box body-input'></textarea>
					{/* submit button */}
					<button type='submit' className='contact-btn input-box'>
						{t("CONTACT_FORM.SEND_EMAIL")}
						<span className='send-btn'>
							<BiSend />
						</span>
					</button>
				</form>
			</div>
			{/* social icon container */}
			<div className='social-icon-container'>
				<ul>
					<li>
						<a
							href='https://github.com/adityaK87'
							target='_blank'
							rel='noreferrer'>
							<span className='github social_btns'>
								<VscGithubInverted />
							</span>
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/in/adityak87/'
							target='_blank'
							rel='noreferrer'>
							<span className='linkedin social_btns'>
								<SlSocialLinkedin />
							</span>
						</a>
					</li>
					<li>
						<a
							href='https://twitter.com/aditya_K87'
							target='_blank'
							rel='noreferrer'>
							<span className='twitter social_btns'>
								<FiTwitter />
							</span>
						</a>
					</li>
					<li>
						<a
							href='https://peerlist.io/adityak87'
							target='_blank'
							rel='noreferrer'>
							<span className='peerlist social_btns'>
								<img src={Peerlist} alt='PeerList' width='20' />
							</span>
						</a>
					</li>
				</ul>
			</div>

			<FooterLink
				phrase={t("CONTACT_PAGE_CONTENT.KNOW_MORE")}
				link={t("CONTACT_PAGE_CONTENT.ABOUT_ME")}
				toAdress='/about'
			/>
		</div>
	);
};
export default Contact;
