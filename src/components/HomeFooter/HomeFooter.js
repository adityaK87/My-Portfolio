import React from "react";
import "./HomeFooter.css";
import { VscGithubInverted } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import Peerlist from "../../assets/peerlist.png";

const HomeFooter = () => {
	return (
		<div className='home-footer'>
			<div className='container'>
				<div className='left-footer'>
					<h1 className='my-name'>ADITYA KUMAR</h1>
					<p className='my-details'>
						A dedicated Front End Developer looking for challenging
						opportunities which could help in enhancing my skills.
					</p>
				</div>

				<div className='right-footer'>
					<div className='social-media'>
						{/* <h2>SOCIAL MEDIA</h2> */}
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
										<img src={Peerlist} alt='PeerList' />
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='large-4 columns'>
				<p className='madewithlove'>
					Made with <i className='fa fa-heart'></i> in India
				</p>
			</div>
			<p className='copyright'>
				<span className='copyright-section'>
					© {new Date().getFullYear()} - Aditya Kumar
				</span>
			</p>
		</div>
	);
};
export default HomeFooter;
