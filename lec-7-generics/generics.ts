function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;

  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [st1getter, st1setter] = simpleState(6);
console.log(st1getter());
st1setter(25);
console.log(st1getter());

// more example on Generics
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: String;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: 'Megasaur',
    hp: 50,
  },
  {
    name: 'Balbasaur',
    hp: 20,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
