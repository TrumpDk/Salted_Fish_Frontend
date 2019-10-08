import React from 'react'
import { Tabs } from 'antd-mobile'

const tabs = [
    { title: 'First Tab', key: 't1' },
    { title: 'Second Tab', key: 't2' },
    { title: 'Third Tab', key: 't3' },
];

const CategoriesLists = () => {
    return (
        <Tabs tabs={tabs}>
        </Tabs>
    );
}

export default CategoriesLists;