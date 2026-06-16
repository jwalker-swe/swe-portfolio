export default function NavBar() {
	return (
		<div className={`mx-auto my-7`}>
			<nav className={`flex justify-between items-center`}>
				<span className={`text-primary text-xl font-bold`}>
					Jordan Walker
				</span>
				<ul className={`text-primary text-md font-semibold flex justify-evenly items-center gap-5`}>
					<li className={`navbar-list-item hover:text-crate`}>
						<a href='/'>
							Home
						</a>
					</li>
					<li className={`navbar-list-item hover:text-crate`}>
						<a href='#projects'>
							Projects
						</a>
					</li>
					<li className={`navbar-list-item hover:text-crate`}>
						<a href='/assets/documents/jwalker_resume.pdf' target='_blank'>
							Resume
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
