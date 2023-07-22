import React, { FC, ImgHTMLAttributes, useState } from 'react'
import classNames from 'classnames'

import './Image.css'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  skeleton?: boolean
}

const Image: FC<ImageProps> = ({ className, src = '', alt, onLoad, skeleton = false, ...restProps }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={classNames(
        'image',
        {
          'image--loaded': loaded,
          'skeleton-gradient': skeleton || (src.length > 0 && !loaded),
        },
        className
      )}
    >
      {src.length > 0 && (
        <img
          {...restProps}
          className="image__element"
          onLoad={(e) => {
            setLoaded(true)
            if (onLoad) {
              onLoad(e)
            }
          }}
          alt={alt}
          src={src}
        />
      )}
    </div>
  )
}

export default Image
