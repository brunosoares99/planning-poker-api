import { faker } from '@faker-js/faker';
import { UserProps } from '../../entities/user.entity';

// Get from user props but non required fields
type Props = Omit<UserProps, 'name'>;

export function UserDataBuilder(props: Props): UserProps {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    createdAt: new Date(),
    ...props,
  };
}
