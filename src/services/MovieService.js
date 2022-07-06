"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const http_1 = require("../http");
class MovieService {
    static getMovie() {
        return __awaiter(this, void 0, void 0, function* () {
            const movie = yield http_1.$api.get('movies');
            return yield movie.data;
        });
    }
    static getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield http_1.$api.get('movies/allcategories');
            return categories.data;
        });
    }
    static getMovieOfCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield http_1.$api.get(`movies/categories?category=${id}`);
        });
    }
}
exports.MovieService = MovieService;
