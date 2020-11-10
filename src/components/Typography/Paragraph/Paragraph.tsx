import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

const ParagraphComponent = styled.p<TypographyProps>(typography)

/**
 * A Paragraph styled with "text" theme token
 */
export const Paragraph: React.FC = ({ children }) => <ParagraphComponent fontFamily="text" fontSize={0}>{children}</ParagraphComponent>
