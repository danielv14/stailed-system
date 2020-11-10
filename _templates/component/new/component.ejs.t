---
to: src/components/<%= Name %>/<%= Name %>.tsx
---
import styled from "styled-components";

// Example usage of styled-component
export const Title = styled.h1`
  color: red;
  font-size: 50px;
`

interface <%= Name %>Props {
  /**
   * Don't forget to add extra documentations for props when needed in JSDoc
   */
}

export const <%= Name %>: React.FC< <%= Name %>Props> = ({ children }) => (
  <Title>{children}</Title>
)

<%= Name %>.displayName = '<%= Name %>';


