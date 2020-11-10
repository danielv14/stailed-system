import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

/**
 * A reusable heading component useful as a building block for creating header levels
 */
export const Heading = styled.h2<TypographyProps>(typography)

Heading.displayName = 'Heading'
