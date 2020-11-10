import { HeaderProps } from "../../../props/typography/headerProps";
import { Heading } from "../Heading/Heading";

export const H5: React.FC<HeaderProps> = ({ children, isBold = false }) => 
  <Heading 
    as="h5"
    fontSize={1}
    fontWeight={isBold ? 'bold' : 'normal'}
    fontFamily="heading">
      {children}
  </Heading>

H5.displayName = 'H5';