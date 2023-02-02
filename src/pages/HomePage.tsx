import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {List} from '../components/List';
import {Card} from '../components/Card';
import {Controls} from '../components/Controls';
import {ALL_COUNTRIES} from '../config';
import {Country} from "./Details";

export const HomePage: React.FC<HomePageType> = ({setCountries, countries}) => {
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const navigate = useNavigate();

    const handleSearch = useCallback((search?: string, region?: string) => {
        let data = [...countries];

        if (region) {
            data = data.filter((c) => c.region.includes(region));
        }

        if (search) {
            data = data.filter((c) =>
                c.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredCountries(data);
    }, [countries]);

    useEffect(() => {
        if (!countries.length) {
            axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data));
        }
    }, [countries.length, setCountries]);

    useEffect(() => {
        handleSearch();
    }, [countries, handleSearch]);

    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {filteredCountries.map((c) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: c.region,
                            },
                            {
                                title: 'Capital',
                                description: c.capital,
                            },
                        ],
                    };

                    return (
                        <Card
                            key={c.name}
                            onClick={() => navigate(`/country/${c.name}`)}
                            {...countryInfo}
                        />
                    );
                })}
            </List>
        </>
    );
}

type HomePageType = {
    countries: Country[]
    setCountries: (countries: Country[]) => void
}