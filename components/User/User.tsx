import { useQuery } from '@apollo/client';
import { CURRENT_USER_QUERY } from '../../queries/getUser';
import { User } from '../../types';

export function useUser(): User {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}
