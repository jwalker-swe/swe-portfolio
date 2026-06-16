import Image from 'next/image';

type ProjectInfo = {
	projectName: string,
	backgroundImg: string,
	technology: {
		techName: string,
		iconPath: string
	}[],
	description: string,
	gitHubLink: string | null,
	liveLink: string | null,
}

export default function Project({project}: {project: ProjectInfo}) {

	console.log("Current Project: ", project);

	return (
		<div className={`w-full h-110 group hover:scale-105 border-2 border-tertiary hover:border-crate ease-in-out duration-200 rounded-xl`}>
			<div className={`w-full h-full rounded-xl bg-cover brightness-70 hover:brightness-100 ease-in-out duration-200 flex flex-col justify-end items-center bg-no-repeat`} 
			style={{backgroundImage: `url(${project.backgroundImg})`}}>
				<div className={`projectInfo group-hover:opacity-100 opacity-0 ease-in-out duration-200 w-full h-fit bg-gradient-to-b from-transparent to-black rounded-bl-lg rounded-br-lg px-8 flex flex-col justify-start items-start gap-2 pb-8`}>
					<div className={`flex w-full h-fit justify-start items-center gap-2`}>
						<h4 className={`w-fit h-fit text-primary text-lg font-bold`}>
							{project.projectName} 
						</h4>
						{project.liveLink ? <a href={project.liveLink} target="_blank" className={`w-fit h-fit text-primary hover:text-crate underline`}><span className={`text-sm`}>Visit</span></a> : <div></div>}
						{project.gitHubLink ? <a href={project.gitHubLink} target="_blank" className={`w-fit h-fit text-primary hover:text-crate underline`}><span className={`text-sm`}>GitHub</span></a> : <div></div>} 
					</div>
					<div className={`flex justify-start items-center gap-4`}>
						{project.technology.map((tech) => (
							<div key={tech.techName} className={`flex justify-start items-center gap-1`}>
								<Image src={tech.iconPath} width={16} height={16} alt={`${tech.iconPath} icon`}/>
								<span className={`text-primary text-sm`}>
									{tech.techName}
								</span>
							</div>
						))}
					</div>
					<p className={`text-xs text-primary`}>
						{project.description}
					</p>
				</div>
			</div>
		</div>
	)
}
