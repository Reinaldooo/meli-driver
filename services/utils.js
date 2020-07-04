export const oauthUrl = "http://auth.mercadolivre.com.br/authorization?response_type=code&client_id=3430047875313953&redirect_uri=https://apimegahack-v3.reinaldowft.com/auth"

export const formatDate = (date) => {
  let day = String(date.getDate())
  if(day.length < 2) {
    day = "0" + day
  }
  let month = String(date.getMonth()+1)
  if(month.length < 2) {
    month = "0" + month
  }
  let year = date.getFullYear()
  return `${day}/${month}/${year}`
};
