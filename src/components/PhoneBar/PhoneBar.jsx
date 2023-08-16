import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                const phonesData = loadedData.map(phone => {
                    const parse = phone.slug.split('-');
                    const price = parseInt(parse[1]);
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    };
                    return phoneInfo

                });
                setPhones(phonesData)
            })
    }, [])

    return (
        <div className='p-8'>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={phones}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey='price'></Bar>
                    <XAxis dataKey='name'></XAxis>
                    <YAxis dataKey='price'></YAxis>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PhoneBar;