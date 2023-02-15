import React, { ChangeEvent, Key, useState } from 'react';
import { Collapse, ConfigProvider, Input, Radio, RadioChangeEvent, Space, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { CategorySchema } from '../../model/types/categories';
import { getFilteredTreeData } from '../../../../shared/helper/getFilteredTreeData';
import cls from './CategoryList.module.css';
import { prepareTreeData } from '../../../../shared/helper/prepareTreeData';
import { TreeComponent } from '../TreeComponent/TreeComponent';
import { SliderComponent } from '../SliderComponent/SliderComponent';
import { AntTreeNodeCheckedEvent } from 'antd/es/tree';
import { getFlatItems } from '../../../../shared/helper/getFlatItems';

interface CategoryListProps {
  className?: string;
  category: CategorySchema;
}

const CategoryList: React.FC<CategoryListProps> = ({ category }) => {
  const flatItems = getFlatItems(category.items);

  const [searchValue, setSearchValue] = useState<string>('');
  const [value, setValue] = React.useState('include');
  const [includeCheckedKey, setIncludeCheckedKey] = useState<Key[]>([]);
  const [excludeCheckedKey, setExcludeCheckedKey] = useState<Key[]>([]);
  //const [includeTagsTitle, setIncludeTagsTitle] = useState<{ key: string; title: string }[]>([]);
  //const [excludeTagsTitle, setExcludeTagsTitle] = useState<{ key: string; title: string }[]>([]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const onChangeTab = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    console.log('onChangeTab: ', e.target.value);
  };

  const onCheckInclude = (checkedKeys: any, e: AntTreeNodeCheckedEvent) => {
    setIncludeCheckedKey(checkedKeys);
    /*   const includeTags: any[] = [];
    if (e.checkedNodes) {
      e.checkedNodes.forEach((el: any) => {
        if (el.children) return;
        includeTags.push({ key: el.key, title: el.title });
      });
    }*/
    //setIncludeTagsTitle(includeTags);
    console.log('includeCheckedKey: ', checkedKeys);
  };
  const onCheckExclude = (checkedKeys: any, e: AntTreeNodeCheckedEvent) => {
    setExcludeCheckedKey(checkedKeys);
    /*const excludeTags: any[] = [];
    if (e.checkedNodes) {
      e.checkedNodes.forEach((el: any) => {
        if (el.children) return;
        excludeTags.push({ key: el.key, title: el.title });
      });
    }*/
    //setExcludeTagsTitle(excludeTags);
    console.log('excludeCheckedKey: ', checkedKeys);
  };

  const handleRemoveInclude = (key: Key) => {
    let newIncludedKeys = includeCheckedKey.filter((p) => p !== key);
    for (const item of flatItems.reverse()) {
      if (!item.children || !newIncludedKeys.includes(item.key)) {
        // Нам нужны только родители, и они должны быть отмечены
        continue;
      }
      const hasCheckedIncChildren = item.children.some((child) =>
        newIncludedKeys.includes(child.key),
      );
      if (!hasCheckedIncChildren) {
        // Это родитель, он отмечен и ни один из его детей не выбран, исключим и его тоже
        newIncludedKeys = newIncludedKeys.filter((p) => p !== item.key);
      }
    }
    setExcludeCheckedKey(newIncludedKeys);
  };

  const handleRemoveExclude = (key: Key) => {
    let newExcludedKeys = excludeCheckedKey.filter((p) => p !== key);
    for (const item of flatItems.reverse()) {
      if (!item.children || !newExcludedKeys.includes(item.key)) {
        continue;
      }
      const hasCheckedExcChildren = item.children.some((child) =>
        newExcludedKeys.includes(child.key),
      );
      if (!hasCheckedExcChildren) {
        newExcludedKeys = newExcludedKeys.filter((p) => p !== item.key);
      }
    }
    setExcludeCheckedKey(newExcludedKeys);
  };

  /*   const handleRemoveInclude = (key: string) => {
        setIncludeCheckedKey(includeCheckedKey.filter((p) => p !== key));
        //setIncludeTagsTitle(includeTagsTitle.filter((t) => t !== title));
    };*/
  /*
    const handleRemoveExclude = (key: string): void => {
        setExcludeCheckedKey(excludeCheckedKey.filter((p) => p !== key));
        //setExcludeTagsTitle(excludeTagsTitle.filter((t) => t !== title));
    };*/

  const getItem = (targetKey: Key) => flatItems.filter(({ key }) => key === targetKey)?.[0] || null;
  const getItemTitle = (targetKey: Key) => getItem(targetKey)?.title;
  // const isItemParent = (targetKey: Key) => getItem(targetKey)?.children!.length > 0;

  const isItemParent = (targetKey: Key) => (getItem(targetKey)?.children?.length || 0) > 0;

  const filteredData = category.items && getFilteredTreeData(category.items, searchValue);

  const renderContent = (tab: string) => {
    switch (tab) {
      case 'include':
        return category.displayType === 'tree' ? (
          <TreeComponent
            onCheck={onCheckInclude}
            checkedKeys={includeCheckedKey}
            treeData={
              category.title === 'Пол'
                ? prepareTreeData(filteredData!, excludeCheckedKey)
                : prepareTreeData(
                    [
                      {
                        key: '01',
                        title: 'Выбрать все',
                        children: filteredData,
                      },
                    ],
                    excludeCheckedKey,
                  )
            }
          />
        ) : (
          <SliderComponent />
        );
      case 'exclude':
        return (
          <TreeComponent
            onCheck={onCheckExclude}
            checkedKeys={excludeCheckedKey}
            treeData={prepareTreeData(
              [
                {
                  key: '01',
                  title: 'Выбрать все',
                  children: filteredData,
                },
              ],
              includeCheckedKey,
            )}
          />
        );
    }
  };
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorBorder: '#edf0f2',
          },
        }}
      >
        <Collapse className={cls.collapseContainer} expandIconPosition="end" accordion>
          <Collapse.Panel
            key={category.id}
            header={
              <div className={cls.collapseHeader}>
                <div className={cls.headerTitle}>{category.title + ':'}</div>
                <div className={cls.headerTags}>
                  {includeCheckedKey.length > 0 && <div className={cls.headerIncludeTags}></div>}
                  {excludeCheckedKey.length > 0 && <div className={cls.headerIncludeTags}></div>}
                </div>
              </div>
            }
            className={cls.collapsePanel}
          >
            <div className={cls.panelContent}>
              <div className={cls.contentWrapper}>
                {category.displayParams.enableExclude ? (
                  <Radio.Group
                    defaultValue="include"
                    value={value}
                    className={cls.tabGroup}
                    buttonStyle={'solid'}
                    onChange={onChangeTab}
                  >
                    <Radio.Button value="include" className={cls.tabButton}>
                      Включить
                    </Radio.Button>
                    <Radio.Button value="exclude" className={cls.tabButton}>
                      Исключить
                    </Radio.Button>
                    <div className={cls.content}>
                      <div className={cls.searchWrapper}>
                        <Input
                          allowClear
                          className={cls.search}
                          placeholder="Search"
                          prefix={<SearchOutlined />}
                          value={searchValue}
                          onChange={onChangeSearch}
                        />
                      </div>
                      <div className={cls.category}>{renderContent(value)}</div>
                    </div>
                  </Radio.Group>
                ) : (
                  <div
                    className={`${category.title !== 'Возраст' ? cls.content : cls.categoryAge}`}
                  >
                    {category.displayParams.enableSearch && (
                      <div className={cls.searchWrapper}>
                        <Input
                          allowClear
                          className={cls.search}
                          placeholder="Search"
                          prefix={<SearchOutlined />}
                          value={searchValue}
                          onChange={onChangeSearch}
                        />
                      </div>
                    )}
                    <div className={cls.category}>{renderContent('include')}</div>
                  </div>
                )}
              </div>
              {category.title !== 'Возраст' && (
                <div className={cls.choiceWrapper}>
                  <Space direction={'vertical'} size={6} wrap>
                    {includeCheckedKey.length > 0 &&
                      includeCheckedKey
                        .filter((k) => !isItemParent(k))
                        .map((key) => {
                          return (
                            <Tag
                              key={key}
                              closable
                              color={'#3fcbff'}
                              onClose={() => handleRemoveInclude(key)}
                              className={cls.choice}
                            >
                              {getItemTitle(key)}
                            </Tag>
                          );
                        })}
                    {excludeCheckedKey.length > 0 &&
                      excludeCheckedKey
                        .filter((k) => !isItemParent(k))
                        .map((key) => {
                          /*const handleRemoveExclude = () => {
                          setExcludeCheckedKey(excludeCheckedKey.filter((p) => p !== i.key));
                          setExcludeTagsTitle(excludeTagsTitle.filter((t) => t.key !== i.key));
                        };*/
                          return (
                            <Tag
                              key={key}
                              closable
                              color={'#d81b3b'}
                              onClose={() => handleRemoveExclude(key)}
                              className={cls.choice}
                            >
                              {getItemTitle(key)}
                            </Tag>
                          );
                        })}
                  </Space>
                </div>
              )}
            </div>
          </Collapse.Panel>
        </Collapse>
      </ConfigProvider>
    </>
  );
};
export default CategoryList;
