import { createElement, FC, PropsWithChildren } from 'react'
import { HocProps, MapProps, Obj, WrapProps } from 'interface/interface'
import * as React from 'react'

export type { HocProps, MapProps }

export function Map<
	Props extends Obj,
	AlwaysProps extends Obj,
	TPropIn extends string | undefined = undefined,
>({
	keyName = 'id',
	data,
	item,
	props,
	withIndex = false,
	type,
	typeItem,
	className,
	propsIn,
}: MapProps<Props, AlwaysProps, TPropIn>) {
	return (
		<Wrap type={type} className={className}>
			{data?.map((dataItem, index) => {
				return (
					<WrapItem
						data={dataItem}
						propsIn={propsIn}
						props={props}
						typeItem={typeItem}
						item={item}
						withIndex={withIndex}
						index={index}
						key={`map-${keyName in dataItem ? dataItem[keyName] : index}`}
					/>
				)
			})}
		</Wrap>
	)
}

export const MapWithHoc: HocProps = (observer) => observer(Map)

function WrapItem({ item, typeItem, propsIn, index, props, withIndex, data }) {
	const withIndexSpread = withIndex ? { index } : {}
	const Component = item
	const merge = propsIn ? { [propsIn]: data, props } : { ...data, ...props }

	const spread = {
		...merge,
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
