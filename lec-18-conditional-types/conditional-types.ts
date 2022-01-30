// import fetch from 'node-fetch';

// interface PokemonResults {
//   count: number;
//   next?: string;
//   previous?: string;
//   results: {
//     name: string;
//     url: string;
//   }[];
// }

// type FetchPokemonResult<T> = T extends undefined
//   ? Promise<PokemonResults>
//   : void;

// function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(
//   url: string,
//   callback?: T
// ): FetchPokemonResult<T> {
//   if (callback) {
//     fetch(url)
//       .then((res) => res.json())
//       .then(data => callback(data));
//     return undefined as PokemonResults;
//   } else {
//     return fetch(url).then((res) => res.json()) as PokemonResults;
//   }
// }
