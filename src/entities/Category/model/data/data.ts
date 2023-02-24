import { Category } from '../types/categories';

export function getData(): Category[] {
  return [
    {
      id: 1,
      code: 'gender',
      title: 'Пол',
      displayType: 'tree',
      displayParams: {
        enableExclude: false,
        enableSearch: false,
      },
      items: [
        { key: '001', title: 'Женщины' },
        { key: '002', title: 'Мужчины' },
      ],
    },
    {
      id: 2,
      code: 'age',
      title: 'Возраст',
      displayType: 'slider',
      displayParams: {
        enableExclude: false,
        enableSearch: false,
      },
      items: [],
    },
    {
      id: 3,
      code: 'geo',
      title: 'География',
      displayType: 'tree',
      displayParams: {
        enableExclude: true,
        enableSearch: true,
      },
      items: [
        { key: '008', title: 'Москва' },
        { key: '009', title: 'Московская область' },
        { key: '010', title: 'Санкт-Петербург' },
        {
          key: '011',
          title: 'Ленинградская область',
          children: [
            { key: '0110', title: 'Выборг' },
            { key: '0111', title: 'Волхов' },
            { key: '0112', title: 'Кировск' },
            { key: '0113', title: 'Сосновый бор' },
            { key: '0114', title: 'Отрадное' },
          ],
        },
        {
          key: '044',
          title: 'Тульская область',
          children: [
            { key: '0410', title: 'Богородицк' },
            { key: '0411', title: 'Ефремов' },
            { key: '0412', title: 'Новомосковск' },
            { key: '0413', title: 'Тула' },
            { key: '0414', title: 'Щекино' },
          ],
        },
        { key: '045', title: 'Тверская область' },
      ],
    },
    {
      id: 4,
      code: 'child',
      title: 'Дети',
      displayType: 'tree',
      displayParams: {
        enableExclude: false,
        enableSearch: true,
      },
      items: [
        { key: '012', title: 'Дошкольники' },
        { key: '013', title: 'Старшеклассники' },
        { key: '014', title: 'Школьники' },
        { key: '015', title: 'Нет детей' },
      ],
    },
    {
      id: 5,
      code: 'income',
      title: 'Доход',
      displayType: 'tree',
      displayParams: {
        enableExclude: false,
        enableSearch: true,
      },
      items: [
        { key: '017', title: 'Ниже среднего' },
        { key: '018', title: 'Средний' },
        { key: '019', title: 'Выше среднего' },
        { key: '020', title: 'Высокий' },
        { key: '021', title: 'Премиум' },
      ],
    },
    {
      id: 6,
      code: 'device',
      title: 'Устройство',
      displayType: 'tree',
      displayParams: {
        enableExclude: false,
        enableSearch: true,
      },
      items: [
        {
          key: '022',
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
          key: '023',
          title: 'Операционная система',
          children: [
            { key: '620', title: 'MacOs' },
            { key: '621', title: 'Linux' },
            { key: '622', title: 'Windows' },
            { key: '623', title: 'Android' },
          ],
        },
        {
          key: '024',
          title: 'Производитель устройства',
          children: [
            { key: '025', title: 'Пункт 1' },
            { key: '026', title: 'Пункт 2' },
            { key: '027', title: 'Пункт 3' },
            { key: '028', title: 'Пункт 3' },
          ],
        },
      ],
    },
    {
      id: 7,
      code: 'inter',
      title: 'Интересы',
      displayType: 'tree',
      displayParams: {
        enableExclude: true,
        enableSearch: true,
      },
      items: [
        {
          key: '029',
          title: 'B2B',
          children: [
            {
              key: '030',
              title: 'Реклама и маркетинг',
            },
            {
              key: '031',
              title: 'Юридические и бухгалтерские услуги',
            },
          ],
        },
        {
          key: '032',
          title: 'Дети',
          children: [
            { key: '033', title: 'Товары для детей' },
            { key: '034', title: 'Детский контент' },
          ],
        },
        {
          key: '035',
          title: 'Здоровье',
          children: [
            { key: '036', title: 'Медицинские услуги' },
            { key: '037', title: 'Аптеки и лекарства' },
          ],
        },
        {
          key: '038',
          title: 'Красота и уход',
          children: [
            { key: '039', title: 'Салоны красоты' },
            { key: '040', title: 'Косметика и парфюмерия' },
            { key: '041', title: 'Мода и стиль' },
            {
              key: '042',
              title: 'Парикмахерские и барбершопы',
            },
            { key: '043', title: 'Парфюмерия' },
          ],
        },
      ],
    },
  ];
}
