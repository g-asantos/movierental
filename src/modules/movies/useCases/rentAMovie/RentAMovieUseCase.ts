import { inject, injectable } from 'tsyringe';


import { Movie } from '../../entities/Movie';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';

@injectable()
class RentAMovieUseCase {
    constructor(
        @inject('MoviesRepository')
        private moviesRepository: IMoviesRepository,
    ) {}

    async execute(title: string): Promise<Movie> {
        const movieRented = await this.moviesRepository.rentMovie(title);

        return movieRented;
    }
}

export { RentAMovieUseCase };
