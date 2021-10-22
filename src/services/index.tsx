// import {GameRequest} from '../interfaces'

const BaseUrl = 'https://frozen-basin-66995.herokuapp.com'

type Response = {
    games: any[]
    status: String
    message: string
}

export async function getGames(): Promise<Response> {
    const response = await fetch(`${BaseUrl}/games`,{
       method: 'GET',
       headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
  return await response.json();
   
}
