import { HeaderProps } from "../../../props/typography/headerProps";
import { Heading } from "../Heading/Heading";

export const H6: React.FC<HeaderProps> = ({ children, isBold = false }) => 
  <Heading 
    as="h6"
    fontSize={0}
    fontWeight={isBold ? 'bold' : 'normal'}
    fontFamily="heading">
      {children}
  </Heading>

H6.displayName = 'h6';