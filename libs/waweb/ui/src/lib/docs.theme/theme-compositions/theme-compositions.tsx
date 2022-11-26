import { IconFont } from '../../design.theme/icons-font';
import { ThemeDocumenter, ThemeDocumenterProps } from '../theme-context';

const ICON_MOON_VERSION = 'mxd7i0';

export type ThemeCompositionsProps = ThemeDocumenterProps;

export const ThemeCompositions = ({ children, ...rest }: ThemeCompositionsProps) => {
  return (
    <ThemeDocumenter {...rest}>
      <IconFont query={ICON_MOON_VERSION} />
      {children}
    </ThemeDocumenter>
  );
};
