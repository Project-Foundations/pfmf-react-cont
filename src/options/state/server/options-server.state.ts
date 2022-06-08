import { useQuery } from 'react-query';
import { OptionRepositoryImpl } from '../../../adapter/options';
import { Option } from '../../../domain/options';

const OPTIONS_QUERY_KEY = 'options';
const repository = new OptionRepositoryImpl();

type QueryOptions = {
  options: Option[] | undefined;
  optionsStatus: string;
  fetchOptions: () => void;
}

export function useQueryOptions(): QueryOptions {
  const {
    data: options,
    status: optionsStatus,
    refetch: fetchOptions
  } = useQuery<Option[]>(OPTIONS_QUERY_KEY, () => repository.getAll());
  return { options, optionsStatus, fetchOptions };
}