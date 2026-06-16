'use client'

import Image from "next/image";
import NavBar from "@/components/NavBar";
import ListedTechnology from "@/components/ListedTechnology";
import Project from "@/components/ProjectInfo";
import Job from "@/components/JobInfo";
import { useState, useEffect } from 'react';


// Set paths to technology icons
const typeScriptIconPath = "/assets/images/icons/typescriptlang-icon.svg";
const javaScriptIconPath = "/assets/images/icons/javascript-icon.svg";
const pythonIconPath = "/assets/images/icons/python-icon.svg";
const sqlIconPath = "/assets/images/icons/sqlite-icon.svg";
const nextIconPath = "/assets/images/icons/nextjs-icon.svg";
const reactIconPath = "/assets/images/icons/reactjs-icon.svg";
const gitIconPath = "/assets/images/icons/git-scm-icon.svg";
const supabaseIconPath = "/assets/images/icons/supabase-icon.svg";
const tailwindIconPath = "/assets/images/icons/tailwindcss-icon.svg";
const htmlIconPath = "/assets/images/icons/html5-icon.svg";
const cssIconPath = "/assets/images/icons/css-icon.svg";
const postmanIconPath = "/assets/images/icons/postman-icon.svg";
const nodejsIconPath = "/assets/images/icons/nodejs-icon.svg";
const pandasIconPath = "/assets/images/icons/pandas-icon.svg";
const postgresIconPath = "/assets/images/icons/postgresql-icon.svg";
const fastapiIconPath = "/assets/images/icons/fastapi-icon.svg";
const dockerIconPath = "/assets/images/icons/docker-icon.svg";

// Set paths to project background images
const crateBackgroundImg = "/assets/images/projects/crate-001.png";
const prismBackgroundImg = "/assets/images/projects/prism-001.png";
const locationBannerImg = "/assets/images/banners/location-banner-001.png";

type ProjectInfo = {
	projectName: string,
	backgroundImg: string,
	technology: {
		techName: string,
		iconPath: string
	}[],
	description: string,
	gitHubLink: string | null,
	liveLink: string | null
}

type JobInfo = {
	companyName: string,
	startDate: string,
	endDate: string,
	jobTitle: string,
	location: string,
	bulletPoints: {
		point1: string,
		point2: string
	}
}

const crate: ProjectInfo = {
	projectName: "Crate",
	backgroundImg: crateBackgroundImg,
	technology: [
		{
			techName: 'TypeScript',
			iconPath: typeScriptIconPath
		},
		{
			techName: 'React',
			iconPath: reactIconPath
		},
		{
			techName: 'Next.js',
			iconPath: nextIconPath
		},
		{
			techName: 'Supabase',
			iconPath: supabaseIconPath
		},
		{
			techName: 'Tailwind CSS',
			iconPath: tailwindIconPath
		}
	],
	description: 'A music focused social platform for users to rate, track, and review albums.',
	gitHubLink: null,
	liveLink: 'https://cratefm.com'
}

const prism: ProjectInfo = {
	projectName: "PRISM Media Player",
	backgroundImg: prismBackgroundImg,
	technology: [
		{
			techName: 'TypeScript',
			iconPath: typeScriptIconPath
		},
		{
			techName: 'Python',
			iconPath: pythonIconPath
		},
		{
			techName: 'React',
			iconPath: reactIconPath
		},
		{
			techName: 'Tailwind CSS',
			iconPath: tailwindIconPath
		}
	],
	description: "A tool for managing and interfacing with media present on a local server.",
	gitHubLink: 'https://github.com/jwalker-swe/prism-media-player',
	liveLink: null
}

const whiskyTree: JobInfo = {
	companyName: 'Whiskytree VFX',
	startDate: 'Feb 2025',
	endDate: 'May 2026',
	jobTitle: 'Senior FX Artist',
	location: 'Atlanta, GA',
	bulletPoints: {
		point1: `Led development of procedural FX systems for both stylized and photorealistic 
				large-format media projects, including complex particle-based simulation workflows for the Las Vegas Sphere.`,
		point2: `Designed and implemented a data-driven procedural system that simulated 
				real-world lighting rigs, with animation and lighting behavior dynamically controlled by audio input data.`
	}
}

const sony: JobInfo = {
	companyName: 'Sony Pictures Imageworks',
	startDate: 'Jul 2023',
	endDate: 'Feb 2024',
	jobTitle: 'Senior FX Artist',
	location: 'Montreal, QC',
	bulletPoints: {
		point1: `Identified and resolved a critical issue in a production simulation 
				workflow by implementing validation logic to prevent incorrect system behavior and improve reliability.`,
		point2: `Developed event-driven procedural simulation systems that dynamically responded to animation and character state data.`		
	}
}

const fuse: JobInfo = {
	companyName: 'FuseFX',
	startDate: 'Sep 2022',
	endDate: 'Jul 2023',
	jobTitle: 'FX Artist',
	location: 'Atlanta, GA',
	bulletPoints: {
		point1: `Engineered a modular procedural simulation system in Houdini that reduced iteration time by 40% and 
				enabled rapid customization across production workflows`,
		point2: `Developed scalable simulation setups for complex multi-material destruction systems, improving 
				realism and controllability in high-impact production sequences.`
	}
}

export default function Home() {

	const [hours, setHours] = useState('');
	const [minutes, setMinutes] = useState('');
	const [colonVisible, setColonVisible] = useState(true);

	useEffect(() => {
		const tick = () => {
			const now = new Date();
			const [h, m] = now.toLocaleTimeString('en-US', {
				timeZone: 'America/New_York',
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			}).split(':');

			setHours(h);
			setMinutes(m);
			setColonVisible(prev => !prev);
		};

		tick()
		const interval = setInterval(tick, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className={`h-fit w-screen bg-background flex flex-col items-center`}
		>
			<div
				className={`h-full w-container`}
			>
				<NavBar/>
				<div className={`w-full h-45 rounded-tl-xl rounded-tr-xl flex flex-col`}
					style={{backgroundImage: `linear-gradient(to bottom, transparent, var(--color-background)), url('/assets/images/banners/location-banner-002.png')`}}
				>
					<div className={`w-full h-16 inset-x-0 top-0 bg-transparent flex justify-end items-start rounded-tl-xl rounded-tr-xl`}>
						<div className={`bg-background w-fit h-fit opacity-70 m-4 rounded-lg`}>
							<span className={`text-sm text-primary px-4 py-4`}>
								{hours}
								<span className={`transition-opacity duration-500 ${colonVisible ? 'opacity-100' : 'opacity-0'}`}>
									:
								</span>
								{minutes}
							</span>
						</div>
					</div>
				</div>
				<section className={`introduction w-full`}>
					<div className={`name-container w-full flex justify-between items-center my-8`}>
						<h2 className={`text-4xl text-primary font-bold`}>
							Hello, I'm Jordan
						</h2>
						<ul className={`link-container flex justify-evenly gap-2`}>
							<span className={`text-primary`}>
								jwalker.swe@gmail.com
							</span>
							<a href="https://github.com/jwalker-swe">
								<div className="icon-container" id="github-icon-container">
									<svg id="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#f0f0f0" fill="none">
										<path d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div> 
							</a>
							<a href="https://www.linkedin.com/in/jwalkerfx/">
								<div className="icon-container" id="linkedin-icon-container">
									<svg id="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#f0f0f0"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
								</div>
							</a>
						</ul>
					</div>
					<p className={`text-primary`}>
						I got into programming while working as an FX Artist within the Film and Television industries.
						During that 7 year span I began using code to create many physically based simulations, optimize
						technical workflows, and build internal tools to streamline workflows. I'm also the founder 
						of <a href="https://cratefm.com" className={`text-crate font-semibold hover:underline`}>Crate</a>
						, a social web application for tracking, rating, and sharing your favorite albums.
					</p>
				</section>
				<section className={`technologies w-full h-fit`}>
					<h3 className={`text-primary text-2xl mt-8 mb-2 font-bold`}>
						Technologies
					</h3>
					<div className={`w-full h-fit flex flex-col justify-start items-start gap-4`}>
						<div className={`w-full flex justify-start items-center gap-8`}>
							<ListedTechnology iconPath={typeScriptIconPath} techName={"TypeScript"} />
							<ListedTechnology iconPath={javaScriptIconPath} techName={"JavaScript"} />
							<ListedTechnology iconPath={pythonIconPath} techName={"Python"} />
							<ListedTechnology iconPath={htmlIconPath} techName={"HTML"} />
							<ListedTechnology iconPath={cssIconPath} techName={"CSS"} />
							<ListedTechnology iconPath={reactIconPath} techName={"React"} />
							<ListedTechnology iconPath={nextIconPath} techName={"Next.js"} />
						</div>
						<div className={`w-full flex justify-start items-center gap-8`}>
							<ListedTechnology iconPath={fastapiIconPath} techName={"FastAPI"} />
							<ListedTechnology iconPath={nodejsIconPath} techName={"Node.js"} />
							<ListedTechnology iconPath={pandasIconPath} techName={"Pandas"} />
							<ListedTechnology iconPath={tailwindIconPath} techName={"Tailwind CSS"} />
							<ListedTechnology iconPath={gitIconPath} techName={"Git"} />
							<ListedTechnology iconPath={sqlIconPath} techName={"SQLite"} />
						</div>
						<div className={`w-full flex justify-start items-center gap-8`}>
							<ListedTechnology iconPath={postgresIconPath} techName={"PostgreSQL"} />
							<ListedTechnology iconPath={dockerIconPath} techName={"Docker"} />
							<ListedTechnology iconPath={postmanIconPath} techName={"Postman"} />
						</div>
					</div>
				</section>
				<section id={'projects'} className={`projects w-full h-fit`}>
					<h3 className={`text-primary text-2xl mt-10 mb-8 font-bold`}>
						Featured Projects
					</h3>
					<div className={`w-full flex flex-col items-center justify-start gap-4`}>
						<Project project={crate}/>
						<Project project={prism}/>
					</div>
				</section>
				<section className={`experience w-full h-fit`}>
					<h3 className={`text-primary text-2xl mt-10 mb-2 font-bold`}>
						Work Experience
					</h3>
					<div className={`w-full flex flex-col justify-start items-center gap-8`}>
						<Job job={whiskyTree}/>
						<Job job={sony}/>
						<Job job={fuse}/>
					</div>
				</section>
			</div>
			<footer className={`w-full my-8`}>
			</footer>
		</div>
	)
}
