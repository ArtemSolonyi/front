import {$api} from '../http'
import {AxiosResponse} from "axios";

interface MovieResponse {

    // "_id": string,
    // "title": string,
    // "description":string
    // "category": string,
    // "ratingsUsers":Array<object>
}

export class MovieService {
    static async getMovie():Promise<any> {
        const movie = await $api.get<MovieResponse>('movies')
        return await movie.data
    }

}
