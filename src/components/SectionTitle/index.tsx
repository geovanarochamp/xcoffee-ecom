import { Separator, TitleContainer } from './styles'

type SectionTitleProps = {
	title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
	return (
		<TitleContainer>
			<h2>{title}</h2>
			<Separator></Separator>
		</TitleContainer>
	)
}
