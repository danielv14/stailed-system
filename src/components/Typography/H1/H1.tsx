import { HeaderProps } from "../../../props/typography/headerProps";
import { Heading } from "../Heading/Heading";

export const H1: React.FC<HeaderProps> = ({ children, isBold = false }) => 
  <Heading 
    as="h1"
    fontSize={5}
    fontWeight={isBold ? 'bold' : 'normal'}
    fontFamily="heading">
      {children}
  </Heading>

H1.displayName = 'H1';