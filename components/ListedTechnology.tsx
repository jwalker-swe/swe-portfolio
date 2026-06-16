import Image from 'next/image'

type ListedTechnologyType = {
	iconPath: string,
	techName: string
}

export default function ListedTechnology({iconPath, techName}: ListedTechnologyType) {
	return (
		<div className={`flex justify-start gap-2 items-center text-primary hover:text-blue-500 hover:scale-105 transition-all ease-in-out duration-300`}>
			<Image src={iconPath} width={28} height={28} alt="TypeScript Icon"/>
			<span className={`font-semibold`}>{techName}</span>
		</div>
	)
}
