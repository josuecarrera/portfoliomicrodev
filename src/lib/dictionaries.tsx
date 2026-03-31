const dictionaries = {
    en: () => import('@/src/dictionaries/en.json').then((module) => module.default),
    es: () => import('@/src/dictionaries/es.json').then((module) => module.default)
};

export const getDictionary = async (locale: 'es' | 'en') => {
    return dictionaries[locale] ? dictionaries[locale]() : dictionaries.es();
}