import { BaseImage, BaseImageProps } from '../../base-ui.elements/image';
import { staticStorageUrl } from '../../base-ui.constants/storage';

export type ImageProps = BaseImageProps;

/**
 * Concrete image, using our Static Storage CDN.
 *
 * Treats src as relative paths on top of our image storage, and supports all other properties an html `<img>` would.
 * @name Image
 * @example
 * <Image src="homepage-bit/map.png" alt="illustration" fullWidth />
 */
export function Image({ src, ...rest }: ImageProps) {
  return (
    <BaseImage
      data-bit-id="waweb.elements/image"
      {...rest}
      src={`${staticStorageUrl}/${src}`}
    />
  );
}
