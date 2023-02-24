import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategorySchema } from '../types/categories';
import { fetchCategory } from '../services/fetchCategory';

const initialState: CategorySchema = {
  data: [
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
  ],
  isLoading: false,
  error: undefined,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<CategorySchema>) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action: PayloadAction<CategorySchema>) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: categoryActions } = categorySlice;
export const { reducer: categoryReducer } = categorySlice;
