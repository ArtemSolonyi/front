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
    static async getCategories():Promise<any>{
        const categories = await $api.get<MovieResponse>('movies/allcategories')
        return categories.data
    }
    static async getMovieOfCategory(id:string):Promise<any>{
        const movies =  await $api.get<MovieResponse>(`movies/categories?category=${id}`)
        return movies.data
    }
    // static async getAllMovies():Promise<any>{
    //     return await $api.get<MovieResponse>('movies')
    // }

}
