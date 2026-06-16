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

export default function Job({job}: {job: JobInfo}) {
	return (
		<div className={`w-full h-fit flex flex-col justify-start items-center text-primary`}>
			<div className={`flex w-full justify-between items-center`}>
				<h4 className={`font-bold`}>
					{job.companyName} — {job.location}
				</h4>
				<div className={`date-container flex justify-end items-center gap-2`}>
					<span>
						{job.startDate} - {job.endDate}
					</span>
				</div>
			</div>
			<div className={`w-full flex justify-start items-center`}>
				<span className={`italic`}>
					{job.jobTitle}
				</span>
			</div>
			<div className={`w-full flex flex-col justify-start items-start text-sm mt-2`}>
				<p>
					• {job.bulletPoints.point1}
				</p>
				<p>
					• {job.bulletPoints.point2}
				</p>
			</div>
		</div>
	)
}
