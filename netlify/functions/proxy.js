const axios = require('axios');

exports.handler = async function (event, context) {
  const { queryStringParameters } = event;

  try {
    const response = await axios.get('http://kopis.or.kr/openApi/restful/pblprfr', {
      params: {
        service: process.env.OPEN_API_SERVICE_KEY, // 환경변수로 API 키 설정
        ...queryStringParameters, // 쿼리 파라미터를 전달
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  }
};
