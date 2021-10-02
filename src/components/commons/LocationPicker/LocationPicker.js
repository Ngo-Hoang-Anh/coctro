import { Cascader } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
async function getLocationTree() {
    const myRequest = new Request('https://provinces.open-api.vn/api/p/1?depth=3');
    let result = await fetch(myRequest)
        .then((response) => {
            try {
                return response.json();
            } catch {
                return response.text();
            }
        })
    return result;
}

const LocationPicker = (props) => {
    const setChosenLocation = props.setChosenLocation;
    const [locations, setLocations] = useState([]);
    async function loadLocation() {
        let rawResult = [];
        let finalResult = [];
        rawResult = await getLocationTree().then((response) => {
            return [...response.districts]
        });
        rawResult.forEach(district => {
            let wards = [];
            district.wards.forEach(ward => {
                //transform
                let currentWard = {
                    value: ward.name,
                    label: ward.name,
                }
                // add wards
                wards = [...wards, currentWard];
            });
            //transform
            let districtInfo = {
                value: district.name,
                label: district.name,
                children: [...wards]
            }
            //add district
            finalResult = [...finalResult, districtInfo];
        });
        setLocations(finalResult);
    }
    useEffect(() => {
        loadLocation();
    }, []);

    return <>
        <Cascader
            onChange={(value, selectedOptions) => {
                let tempLocation = [];
                selectedOptions.forEach((option) => {
                    tempLocation = [...tempLocation, option.value];
                })
                setChosenLocation(tempLocation);
            }}
            options={locations}
            defaultValue={[...props.chosenLocation]}
        />
    </>
}
export default LocationPicker;
