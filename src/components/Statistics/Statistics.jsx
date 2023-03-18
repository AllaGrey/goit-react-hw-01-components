import { Section, Title, List } from './Statistics.styled';
import { Item } from './Item';
import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
  return (
    <Section>
      <Title>Upload stats</Title>
      <List>
        {data.map(({ id, label, percentage }) => (
          <Item key={id} label={label} percentage={percentage} />
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  data: PropTypes.array.isRequired,
};
