import React, {useState, useEffect, FC} from 'react';
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
    const [region, setRegion] = useState('');

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect options={options}
                          placeholder="Filter by Region"
                          isClearable
                // isSearchable={true}
                // value={region}
                // onChange={setRegion}
            />
        </Wrapper>
    )
}

type ControlsPropsType = {
    onSearch: () => void
}