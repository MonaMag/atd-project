import { CategorySchema } from '../types/categories';

export const categories: CategorySchema[] = [
    {
        key: '0',
        title: 'Пол',
        children: [
            { key: '01', title: 'жен' },
            { key: '02', title: 'муж' },
        ],
    },
    {
        key: '1',
        title: 'Возраст',
        children: [
            { key: '10', title: '18-24 года' },
            { key: '11', title: '25-34 года' },
            { key: '12', title: '35-44 года' },
            { key: '13', title: '45-54 года' },
            { key: '14', title: '55 и старше' },
        ],
    },
    {
        key: '2',
        title: 'География',
        children: [
            { key: '20', title: 'Москва' },
            { key: '21', title: 'Московская область' },
            { key: '22', title: 'Санкт-Петербург' },
            { key: '23', title: 'Ленинградская область' },
        ],
    },
    {
        key: '3',
        title: 'Гражданство',
        children: [
            { key: '30', title: 'Гражданин РФ' },
            { key: '31', title: 'Не гражданин РФ' },
        ],
    },
    {
        key: '4',
        title: 'Дети',
        children: [
            { key: '40', title: 'Дошкольники' },
            { key: '41', title: 'Старшеклассники' },
            { key: '42', title: 'Школьники' },
            { key: '43', title: 'Нет детей' },
        ],
    },
    {
        key: '5',
        title: 'Доход',
        children: [
            { key: '50', title: 'Ниже среднего' },
            { key: '51', title: 'Средний' },
            { key: '52', title: 'Выше среднего' },
            { key: '53', title: 'Высокий' },
            { key: '54', title: 'Премиум' },
        ],
    },
    {
        key: '6',
        title: 'Устройство',
        children: [
            {
                key: '61',
                title: 'Мобильное устройство',
                children: [
                    { key: '610', title: 'Смартфон' },
                    { key: '611', title: 'Планшет' },
                    { key: '612', title: 'Телефон' },
                    { key: '613', title: 'КПК' },
                    { key: '614', title: 'Нетбук' },
                ],
            },
            {
                key: '62',
                title: 'Операционная система',
                children: [
                    { key: '620', title: 'MacOs' },
                    { key: '621', title: 'Linux' },
                    { key: '622', title: 'Windows' },
                    { key: '623', title: 'Android' },
                ],
            },
            {
                key: '63',
                title: 'Производитель устройства',
                children: [
                    { key: '630', title: 'Пункт 1' },
                    { key: '631', title: 'Пункт 2' },
                    { key: '632', title: 'Пункт 3' },
                    { key: '633', title: 'Пункт 3' },
                ],
            },
        ],
    },
    {
        key: '7',
        title: 'Интересы',
        children: [
            {
                key: '70',
                title: 'B2B',
                children: [
                    { key: '701', title: 'Реклама и маркетинг' },
                    { key: '702', title: 'Юридические и бухгалтерские услуги' },
                ],
            },
            {
                key: '71',
                title: 'Дети',
                children: [
                    { key: '710', title: 'Товары для детей' },
                    { key: '711', title: 'Детский контент' },
                ],
            },
            {
                key: '72',
                title: 'Здоровье',
                children: [
                    { key: '720', title: 'Медицинские услуги' },
                    { key: '721', title: 'Аптеки и лекарства' },
                ],
            },
            {
                key: '73',
                title: 'Красота и уход',
                children: [
                    { key: '730', title: 'Салоны красоты' },
                    { key: '731', title: 'Косметика и парфюмерия' },
                    { key: '732', title: 'Мода и стиль' },
                    { key: '733', title: 'Парикмахерские и барбершопы' },
                    { key: '734', title: 'Парфюмерия' },
                ],
            },
        ],
    },
];

/*const category = [
    {
        name: 'Пол',
        border: '2px dashed blue',
        children: ['жен', 'муж'],
    },
    {
        name: 'Возраст',
        border: '1px solid red',
        children: ['18', '28'],
    },
    {
        name: 'География',
        border: '1px solid red',
        children: ['Москва', 'Питер'],
    },
    {
        name: 'Соц сети',
        border: '1px solid red',
        children: ['Вконтакте', 'Одноклассники', 'Facebook'],
    },
];*/
