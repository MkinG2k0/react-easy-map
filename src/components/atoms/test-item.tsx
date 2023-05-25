export const Component: any = ({ index = 'no index', name, onClick, id, ...props }) => {
	return (
		<div className={'flex gap-2 bg-amber-300 p-2'} onClick={onClick}>
			<span className={'name'}> {name}</span>
			<span className={'index'}>{`index: ${index}`}</span>
			<div className={'id'}> {`id: ${id}`}</div>
			{props && <div className={'props'}> props: {JSON.stringify(props)}</div>}
		</div>
	)
}
