import Image from 'next/image'

type ListedTechnologyType = {
	iconPath: string,
	techName: string
}

export default function ListedTechnology({iconPath, techName}: ListedTechnologyType) {
	return (
		<div className={`flex justify-start gap-2 items-center`}>
			<Image src={iconPath} width={28} height={28} alt="TypeScript Icon"/>
			<span className={`text-primary font-semibold`}>{techName}</span>
		</div>
	)
}
