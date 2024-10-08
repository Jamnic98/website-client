'use client'
import { useState } from 'react'

import { Card, PageHeader } from 'components'
import projects from 'data/projects'
import { ProjectDataType } from 'types'
import styles from 'styles/projects.module.css'
import Link from 'next/link'

export default function Page() {
	const languages = [
		'',
		...(Array.from(
			new Set(
				projects.map((projectData: ProjectDataType) => projectData.mainLanguage)
			)
		) as string[]),
	]
	const [language, setLanguage] = useState(languages[0])

	return (
		<main className="container">
			<PageHeader
				title="Projects"
				description="Here are some of the personal projects I have worked on:"
			/>
			<article>
				<section>
					Filter by language:{' '}
					<select
						className={styles.select}
						onChange={(e) => setLanguage(e.target.value)}
					>
						{languages.map((mainLanguage: string, index) => (
							<option className={styles.selectOption} key={index}>
								{mainLanguage}
							</option>
						))}
					</select>
				</section>
				<section className={styles.projects}>
					{projects
						.filter(
							(projectData: ProjectDataType) =>
								language === '' || projectData.mainLanguage === language
						)
						.map((projectData: ProjectDataType) => (
							<Link
								href={`/projects/${projectData.id}`}
								// prefetch={true}
								data-testid="application-card"
								key={projectData.id}
							>
								<Card
									title={projectData.title}
									description={projectData.summary}
									imageURI={projectData.screenshotURIs[0]}
									key={projectData.id}
								/>
							</Link>
						))}
				</section>
			</article>
		</main>
	)
}
