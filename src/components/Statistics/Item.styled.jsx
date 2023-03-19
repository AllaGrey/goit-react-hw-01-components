import styled from 'styled-components';

export const ItemStyle = styled.li`
  display: block;
  width: 100px;
  text-align: center;
  background-color: ${({ label }) => {
    // eslint-disable-next-line default-case
    switch (label) {
      case '.docx':
        return 'blue';
      case '.pdf':
        return 'red';
      case '.mp3':
        return 'green';
      case '.psd':
        return 'yellow';
    }
  }};
`;
export const Label = styled.span`
  display: block;
`;

export const Percentage = styled.span``;
