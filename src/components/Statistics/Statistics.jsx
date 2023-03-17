import { Section, Title, List } from './Statistics.styled';
import { Item } from './Item';
import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
  return (
    <Section>
      <Title>Upload stats</Title>
      <List>
        <Item data={data} />
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  data: PropTypes.array.isRequired,
};
