import React, {useState, FC, useEffect} from 'react';
import styled from 'styled-components';
import {Search} from './Search';
import {CustomSelect} from "./CustomSelect";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

export const Controls: FC<ControlsPropsType> = ({onSearch}) => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState<RegionType>({});

    useEffect(() => {
        if (region) {
            onSearch(search, region.value || '');
        }
    }, [search, region, onSearch]);

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect options={options}
                          placeholder="Filter by Region"
                          isClearable
                          isSearchable={false}
                          value={region.value}
                // @ts-ignore
                          onChange={setRegion}
            />
        </Wrapper>
    )
}

type ControlsPropsType = {
    onSearch: (search: string, region: string) => void
}
type RegionType = {
    value?: string
    label?: string
}