import { HeaderProps } from "../../../props/typography/headerProps";
import { Heading } from "../Heading/Heading";

export const H3: React.FC<HeaderProps> = ({ children, isBold = false }) => 
  <Heading 
    as="h3"
    fontSize={3}
    fontWeight={isBold ? 'bold' : 'normal'}
    fontFamily="heading">
      {children}
  </Heading>

H3.displayName = 'H3';