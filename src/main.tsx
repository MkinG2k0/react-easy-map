import React, { FC, ReactHTML } from 'react'

import { MapProps } from './interface'

export const Map: FC<MapProps> = ({
	keyName = 'id',
	data,
	Component,
	props,
	onClick,
	withIndex,
	type,
	typeItem,
	withOnClick,
	className,
}) => {
	return (
		<Wrap type={type} className={className}>
			{data?.map((item, index) => (
				<WrapItem
					data={{ ...item, ...props }}
					onClick={onClick}
					typeItem={typeItem}
					Component={Component}
					withIndex={withIndex}
					withOnClick={withOnClick}
					index={index}
					key={`map-${
						item ? (keyName in item ? item[keyName] : index) : index
					}`}
				/>
			))}
		</Wrap>
	)
}

Map.defaultProps = {
	withIndex: false,
	withOnClick: false,
}

const WrapItem = ({
	Component,
	typeItem,
	onClick,
	index,
	withIndex,
	withOnClick,
	data,
}) => {
	const onClickSpread = withOnClick
		? { onClick: () => onClick?.(data, index) }
		: {}
	const withIndexSpread = withIndex ? { index } : {}

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

interface WrapPops {
	type?: keyof ReactHTML
	className?: string
}

const Wrap: FC<WrapPops> = ({ children, type, className }) => {
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
