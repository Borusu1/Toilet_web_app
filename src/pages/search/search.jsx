import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [markers, setMarkers] = useState([]);
    const [tags, setTags] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [checkboxValues, setCheckboxValues] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/markers/tags')
            .then(res => {
                setTags(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axios.get('/api/v1/markers/findAll')
            .then(res => {
                setMarkers(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            // Якщо чекбокс вибраний, додаємо його значення до масиву
            setCheckboxValues([...checkboxValues, value]);
        } else {
            // Якщо чекбокс знятий, видаляємо його значення з масиву
            setCheckboxValues(checkboxValues.filter(item => item !== value));
        }
    };

    // Фільтруємо маркери, де в назві є введений текст І є всі вибрані теги
    const filteredMarkers = markers.filter(marker =>
        marker.name.toLowerCase().includes(searchText.toLowerCase()) &&
        checkboxValues.every(selectedTag =>
            marker.tags && marker.tags.some(tag => tag.name === selectedTag)
        )
    );

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };
    return (
        <>
            <input
                type="text"
                value={searchText}
                onChange={handleInputChange}
                placeholder="Введіть текст для пошуку..."
            />

            {tags.map((tag) => {
                return (
                    <div key={tag.id}>
                        <label>
                            <input type="checkbox" value={tag.name} onChange={handleCheckboxChange} />
                            {tag.name}
                        </label><br />
                    </div>
                );
            })}
            {/* <h3>Ви вибрали:</h3>
                <ul>
                    {checkboxValues.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul> */}

            {filteredMarkers.length > 0 ? (
                filteredMarkers.map((marker) => {
                    return (
                        <div key={marker.id}>
                            <h1>{marker.id} {marker.name}</h1>
                            <p>{marker.tags.name}</p>
                        </div>
                    );
                })
            ) : (
                <div>
                    <p>No markers found</p>
                </div>
            )}

        </>
    );
};

export default Search;
