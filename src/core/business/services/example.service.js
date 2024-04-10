import { Services } from '@viamericas/viam-utils';

const getDataService = ({ url, token, params, axiosInstance, setValue }) => {
  Services.Rest.instance({
    url: `${url}/end-point`,
    token,
    data: params,
    method: 'POST',
    axiosInstance,
  })
    .then(response => {
      // return response ith callback
      setValue(response.data);
    })
    .catch(error => {
      // handle error
    });
};
export default getDataService;
