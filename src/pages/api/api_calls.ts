import axios from "axios";

export class ApiCalls {
  async get(url: string) {
    const response = await axios.get(url);
    return response.data;
  }


  async post(url:string, postBody : any, accessToken : string){
    //   const response = await axios.post(url, postBody, )
  }
}
