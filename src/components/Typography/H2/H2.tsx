import { HeaderProps } from "../../../props/typography/headerProps";
import { Heading } from "../Heading/Heading";

export const H2: React.FC<HeaderProps> = ({ children, isBold = false }) => 
  <Heading 
    as="h2"
    fontSize={4}
    fontWeight={isBold ? 'bold' : 'normal'}
    fontFamily="heading">
      {children}
  </Heading>

H2.displayName = 'H2';