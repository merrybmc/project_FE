import { useQuery } from '@tanstack/react-query';
import { productOpenApi } from '../Api';
import { XMLParser } from 'fast-xml-parser';

const fetchTicketOpen = async () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);

  let response = await productOpenApi({
    method: 'get',
    url: '/api/pblprfr',
    params: {
      cpage: 1,
      rows: 5,
      prfstate: '02'
    }
  });
  const parser = new XMLParser();
  const jsonData = parser.parse(response.data);
  return jsonData;
};

export const useTicketOpenQuery = () => {
  return useQuery({
    queryKey: ['ticket-open'],
    queryFn: fetchTicketOpen,
    refetchOnWindowFocus: false,
    select: (result) => result
  });
};
