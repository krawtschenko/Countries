import axios from 'axios';
import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5';
import {searchByCountry} from '../config';
import {Button} from "../components/Button";
import {Info} from "../components/Info";

export const Details = () => {
    const {name} = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState<Country | null>(null);

    console.log(country);

    useEffect(() => {
        if (name) {
            axios.get(searchByCountry(name)).then(({data}) => {
                const country: Country = {
                    name: data[0].name,
                    nativeName: data[0].nativeName,
                    capital: data[0].capital,
                    flags: {
                        png: data[0].flags.png
                    },
                    population: data[0].population,
                    region: data[0].region,
                    subregion: data[0].subregion,
                    topLevelDomain: data[0].topLevelDomain,
                    currencies: data[0].currencies,
                    languages: data[0].languages,
                    borders: data[0].borders
                }
                setCountry(country)
            });
        }
    }, [name]);

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack/> Back
            </Button>
            {country && <Info push={navigate} {...country} />}
        </div>
    );
};

export type Country = {
    name: string
    nativeName: string
    flags: {
        png: string
    }
    capital: string
    population: number
    region: string
    subregion: string
    topLevelDomain: Array<string>
    currencies: Array<Currencies>
    languages: Array<Languages>
    borders: Array<string>
}

type Currencies = {
    code: string
    name: string
    symbol: string
}
type Languages = {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
}