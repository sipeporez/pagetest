import axios from 'axios';

const PostDataFetch = async (params, url) => {
  try {
    const token = sessionStorage.getItem('Token');   
    const response = await axios.post(url, params
      , { headers: { Authorization: token } }
    ); 
    return response.data

  } catch (error) {
    console.error("===> Error occured while fetching data", error)
  }
};


const RowDataFetch = async (params) => {
  try {
    const token = sessionStorage.getItem('Token');
    const response = await axios.post('http://192.168.0.126:8080/charts/detail', params
      , { headers: { Authorization: token } }
    );
    return response.data;
  } catch (error) {
    console.error("===> Error occured while ROW fetching data", error);
  }
};

export { RowDataFetch, PostDataFetch };
