import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

const fetchTheater = async ({ id }) => {
  console.log('id2', id);

  const response = await productOpenApi({
    method: 'get',
    url: `/api/pblprfr/${id}`
  });

  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);
  console.log('json', jsonData);
  return jsonData;
};

export const useTheaterQuery = ({ id }) => {
  return useQuery({
    queryKey: ['theater', id],
    queryFn: () => fetchTheater({ id }),
    select: (result) => result.dbs.db
  });
};
