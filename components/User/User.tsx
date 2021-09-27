import { useQuery } from '@apollo/client';
import { CURRENT_USER_QUERY } from '../../queries/getUser';
import { UserType } from '../../types/types';

export function useUser(): UserType {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}
