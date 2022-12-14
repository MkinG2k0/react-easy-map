import React, { FC } from 'react'

import { HocProps, MapProps, WrapProps } from './interface'

export type { HocProps, MapProps }

export const Map: FC<MapProps> = ({
	keyName = 'id',
	data,
	item,
	props,
	onClick,
	withIndex,
	type,
	typeItem,
	className,
}) => {
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
					key={`map-${
						item ? (keyName in dataItem ? dataItem[keyName] : index) : index
					}`}
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

const WrapItem = ({ item, typeItem, onClick, index, withIndex, data }) => {
	const onClickSpread = onClick
		? { onClick: (...props) => onClick(data, index, ...props) }
		: {}
	const withIndexSpread = withIndex ? { index } : {}
	const Component = item

	const spread = {
		...data,
		...onClickSpread,
		...withIndexSpread,
	}

	if (typeItem) {
		const WrapComp = React.createElement(
			typeItem,
			{},
			<Component {...spread} />,
		)
		return <>{WrapComp}</>
	}

	return <Component {...spread} />
}

const Wrap: FC<WrapProps> = ({ children, type, className }) => {
	const typeElement = type || className ? 'div' : ''

	if (typeElement) {
		const WrapComp = React.createElement(
			typeElement,
			{ className },
			<>{children}</>,
		)
		return <>{WrapComp}</>
	}

	return <>{children}</>
}
