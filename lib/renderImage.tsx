import { FC } from 'react'
import { ReactSVG } from 'react-svg'

interface IconProps {
    src: string
    height?: string
    width?: string
    useRequestCache?: boolean
    wrapper?: "div" | "span" | "svg" | undefined
}

const RenderImage: FC<IconProps> = ({ src, height, width, useRequestCache, wrapper, ...props }) => {

    return (
        <ReactSVG
            src={src}
            afterInjection={(svg: any) => {
                svg.style.width = width
            }}
            useRequestCache
            wrapper={wrapper ?? "div"}
            {...props}
        />
    )
}

export default RenderImage