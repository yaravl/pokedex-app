export const getRequestIdNumber = (obj: any, str: string): number =>
  +obj[str].url.slice(0, -1).split(`/${str.replace('_', '-')}/`)[1];

export const snakeCaseToTitleCase = (str: string) =>
  str.replace(/^(.)|-+(.)/g, (_, p1, p2) => (p1 ? p1.toUpperCase() : ` ${p2.toUpperCase()}`));

export const generatePokemonChain = (
  pokemonName: string,
  chainLink: ChainLink
): { prev: ChainLink | null; current: ChainLink; next: ChainLink[] } | undefined => {
  if (chainLink.species.name === pokemonName)
    return { prev: null, current: chainLink, next: chainLink.evolves_to };

  let chain;

  for (let i = 0; i < chainLink.evolves_to.length; i++) {
    const evolve = chainLink.evolves_to[i];
    if (evolve.species.name === pokemonName) {
      chain = { prev: chainLink, current: evolve, next: evolve.evolves_to };
      break;
    }

    chain = generatePokemonChain(pokemonName, evolve);
  }

  return chain;
};

export const getPokemonChain = (data: EvolutionChain) => {
  if (!data.chain.evolves_to.length) return [];

  const evArr = data.chain.evolves_to;

  if (evArr.length === 0) return [];

  const speciesNames: { name: string; trigger: string | number | null }[][] = [];
  for (let i = 0; i < evArr.length; i++) {
    const evPokemonObjs: { name: string; trigger: string | number | null }[] = [];
    const res: { name: string; trigger: string | number | null }[][] = [];

    const createObject = (data: ChainLink) => ({
      name: data.species.name,
      trigger:
        data.evolution_details[data.evolution_details.length - 1]?.item?.name ||
        data.evolution_details[data.evolution_details.length - 1]?.held_item?.name ||
        data.evolution_details[data.evolution_details.length - 1]?.min_level ||
        null
    });

    evPokemonObjs.push(createObject(data.chain), createObject(evArr[i]));

    const evTo = (evArray: ChainLink[]) => {
      for (let j = 0; j < evArray.length; j++) {
        res.push([...evPokemonObjs, createObject(evArray[j])]);
      }
    };
    if (evArr[i].evolves_to.length) {
      evTo(evArr[i].evolves_to);
    }
    if (!res.length) {
      res.push([createObject(data.chain), createObject(evArr[i])]);
    }
    speciesNames.push(...res);
  }

  return [...speciesNames];
};

// COOKIES FUNCTIONS

export const setCookie = (
  name: string,
  value: string | number | boolean | null,
  props: any = {}
) => {
  const cookieOptions: any = props;

  if (typeof props.expires === 'number' && props.expires) {
    const date = new Date();
    date.setTime(date.getTime() + props.expires * 1000);
    cookieOptions.expires = date;
  }

  if (props.expires && props.expires.toUTCString) {
    cookieOptions.expires = props.expires.toUTCString();
  }

  const cookieValue = value ? encodeURIComponent(value) : null;
  let updatedCookie = `${name}=${cookieValue}`;
  Object.keys(cookieOptions).forEach((propName) => {
    updatedCookie += `; ${propName}`;

    const propValue = cookieOptions[propName];

    if (propValue !== true) {
      updatedCookie += `=${propValue}`;
    }
  });

  document.cookie = updatedCookie;
};

export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`)
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const deleteCookie = (name: string) => {
  setCookie(name, null, { expires: -1 });
};

// TODO: вынести функции в отдельные файлы
