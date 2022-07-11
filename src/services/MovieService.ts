import {$api} from '../http'
import {AxiosResponse} from "axios";
import {type} from "@testing-library/user-event/dist/type";

interface MovieResponse {
    // "_id": string,
    // "title": string,
    // "description":string
    // "category": string,
    // "ratingsUsers":Array<object>
}

export class MovieService {
    static async getMovies(): Promise<any> {
        const movie = await $api.get<MovieResponse>('movies')
        return movie.data
    }

    static async getCategories(): Promise<any> {
        const categories = await $api.get<MovieResponse>('movies/allcategories')
        return categories.data
    }

    static async getMovie(slug: string): Promise<any> {
        const movie = await $api.get<MovieResponse>(`movies/slug/?slug=${slug}`)
        return movie.data
    }
    static async setRating(data: any): Promise<any> {
        const setRating = await $api.patch<MovieResponse>('movies/rating', {
            movieId: data?.movieId,
            rating: data?.rating
        })

        return setRating.data
    }

    static async getMovieOfCategory(id: string): Promise<any> {
        const movies = await $api.get<MovieResponse>(`movies/categories?category=${id}`)
        return movies.data
    }
    static async _createMovie(data:any){
        await $api.post<MovieResponse>('movies',data.payload)
    }
    static async _createCategory(data:any){
        const category = await $api.post<MovieResponse>('movies/allCategories',{category:data.payload})
        return category.data
    }
    // static async getAllMovies():Promise<any>{
    //     return await $api.get<MovieResponse>('movies')
    // }

}
