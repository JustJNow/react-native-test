const getAll = () => {

    const apiUrl = process.env.EXPO_PUBLIC_API_URL
    return fetch(apiUrl + '/players', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  
const UserService = {
    getAll,
  }
  
  export default UserService