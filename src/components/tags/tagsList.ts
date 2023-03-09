import { OptionType } from './tags.interface'

export const options: OptionType[] = [
    { value: 'Women', label: 'Women' },
    { value: 'Man', label: 'Man' },
    { value: 'Anime', label: 'Anime' },
]

type TagsListType = {
    [key: string]: {
        [key: string]: { id: number; name: string }[]
    }
}

export const tagsList: TagsListType = {
    Women: {
        Base: [
            { id: 1, name: 'woman' },
            { id: 2, name: 'model' },
            { id: 3, name: 'miss universe' },
            { id: 4, name: 'milf' },
            { id: 5, name: 'celebrity' },
            { id: 6, name: 'lingerie model' },
            { id: 7, name: 'athlete' },
            { id: 8, name: 'bodybuilder' },
            { id: 9, name: 'cyborg' },
            { id: 10, name: 'sorority girl' },
            { id: 11, name: 'bimbo' },
            { id: 12, name: 'woman + man' },
        ],
        'Number of people': [
            { id: 1, name: 'one' },
            { id: 2, name: 'two' },
            { id: 3, name: 'several' },
        ],
        Tags: [
            { id: 1, name: 'busty' },
            { id: 2, name: 'huge boobs' },
            { id: 3, name: 'perfect boobs' },
            { id: 4, name: 'small tits' },
            { id: 5, name: 'beautiful' },
            { id: 6, name: 'glasses' },
            { id: 7, name: 'sunglasses' },
            { id: 8, name: 'tattoos' },
            { id: 9, name: 'lipstick' },
            { id: 10, name: 'muscular' },
            { id: 11, name: 'big ass' },
            { id: 12, name: 'small ass' },
        ],
        Age: [
            { id: 1, name: '18' },
            { id: 2, name: '20s' },
            { id: 3, name: '30s' },
            { id: 4, name: '40s' },
            { id: 5, name: '50s' },
            { id: 6, name: '60s' },
            { id: 7, name: '70s' },
            { id: 8, name: '80s' },
        ],
    },
    Man: {
        Base: [
            { id: 1, name: 'man' },
            { id: 2, name: 'twink' },
            { id: 3, name: 'bodybuilder' },
            { id: 4, name: 'model' },
        ],
        Tags: [
            { id: 1, name: 'big dick' },
            { id: 2, name: 'small dick' },
            { id: 3, name: 'erect' },
            { id: 3, name: 'muscular' },
            { id: 3, name: 'oiled body' },
        ],
        Age: [
            { id: 1, name: '18' },
            { id: 2, name: '20s' },
            { id: 3, name: '30s' },
            { id: 4, name: '40s' },
            { id: 5, name: '50s' },
            { id: 6, name: '60s' },
            { id: 7, name: '70s' },
            { id: 8, name: '80s' },
        ],
    },
    Anime: {
        'Anime Base': [
            { id: 1, name: 'woman' },
            { id: 2, name: 'elf' },
            { id: 3, name: 'alien' },
            { id: 4, name: 'demon' },
        ],
        'Anime Action': [
            { id: 1, name: 'blowjob' },
            { id: 2, name: 'doggystyle' },
            { id: 3, name: 'missionary' },
            { id: 4, name: 'cowgirl' },
        ],
    },
}
