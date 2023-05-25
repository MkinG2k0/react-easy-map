import { createElement, FC, PropsWithChildren } from 'react'
import { HocProps, MapProps, Obj, WrapProps } from '../../../interface/interface'

export type { HocProps, MapProps }

export function Map<Props extends Obj, AlwaysProps extends Obj>({
	keyName = 'id',
	data,
	item,
	props,
	onClick,
	withIndex,
	type,
	typeItem,
	className,
}: MapProps<Props, AlwaysProps>) {
	return (
		<Wrap type={type} className={className}>
			{data?.map((dataItem, index) => (
				<WrapItem
					data={{ ...dataItem, ...props }}
					onClick={onClick}
					typeItem={typeItem}
					item={item}
					withIndex={withIndex}
					index={index}
					key={`map-${keyName in dataItem ? dataItem[keyName] : index}`}
				/>
			))}
		</Wrap>
	)
}

export const MapWithHoc: HocProps = (observer) => observer(Map)

Map.defaultProps = {
	withIndex: false,
	keyName: 'id',
}

function WrapItem({ item, typeItem, onClick, index, withIndex, data }) {
	const onClickSpread = onClick ? { onClick: (...props) => onClick(data, index, ...props) } : {}
	const withIndexSpread = withIndex ? { index } : {}
	const Component = item

	const spread = {
		...data,
		...onClickSpread,
		...withIndexSpread,
	}

	if (typeItem) {
		const WrapComp = createElement(typeItem, {}, <Component {...spread} />)
		return <>{WrapComp}</>
	}

	return <Component {...spread} />
}

const Wrap: FC<PropsWithChildren<WrapProps>> = ({ children, type, className }) => {
	const typeElement = type || className ? 'div' : ''

	if (typeElement) {
		const WrapComp = createElement(typeElement, { className }, <>{children}</>)
		return <>{WrapComp}</>
	}

	return <>{children}</>
}
