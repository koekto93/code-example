import axios from 'axios'

const INVITES_DATA_URL = '/api/recommendations'
const IS_EXISTS_PHONE_URL = '/api/recommendations/IsExistsByPhone'

export const apiGetInvitesData = url =>
  axios.get(INVITES_DATA_URL).then(({ data }) => data)

export const apiCheckExistByPhone = data =>
  axios
    .post(IS_EXISTS_PHONE_URL, { data: data })
    .then(
      ({ data }) => ({ result: true, data: data }),
      data => ({ result: false, message: data.response.data })
    )
