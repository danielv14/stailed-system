import { HeaderProps } from "../../../props/typography/headerProps";
import { Heading } from "../Heading/Heading";

export const H4: React.FC<HeaderProps> = ({ children, isBold = false }) => 
  <Heading 
    as="h4"
    fontSize={2}
    fontWeight={isBold ? 'bold' : 'normal'}
    fontFamily="heading">
      {children}
  </Heading>

H4.displayName = 'H4';