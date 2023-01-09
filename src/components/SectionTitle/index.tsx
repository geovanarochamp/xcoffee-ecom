import { Separator, TitleContainer } from './styles'

type SectionTitleProps = {
	title: string
	subtitle: string
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
	return (
		<TitleContainer>
			<h2>{title}</h2>
			<Separator></Separator>
			<p>{subtitle}</p>
		</TitleContainer>
	)
}
