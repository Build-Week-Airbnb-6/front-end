import React,{useState} from 'react'
import AxiosWithAuth from '../utils/axiosWithAuth'
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, NativeSelect } from '@material-ui/core'

export default function Property(props){
  const [formState, setFormState] = useState(props.propertyData)
  const [saveButtonEnabled, setSaveButtonEnabled] = useState(false)

  const onChangeForm = e => {
    if (typeof formState[e.target.name] === 'string'){
      setFormState({...formState, [e.target.name]: e.target.value})
    } else {
      setFormState({...formState, [e.target.name]: Number(e.target.value)})
    }
    setSaveButtonEnabled(true)
  }

  return(
    <div className='property'>
      <TextField
        name='statename'
        label='State'
        value={formState.statename}
        onChange={e => onChangeForm(e)}
      />
      <TextField
        name='cityname'
        label='City'
        value={formState.cityname}
        onChange={e => onChangeForm(e)}
      />
      <TextField
        name='streetaddress'
        label='Street Address'
        value={formState.streetaddress}
        onChange={e => onChangeForm(e)}
      />
      <TextField
        name='zipcode'
        label='Zip Code'
        value={formState.zipcode}
        onChange={e => onChangeForm(e)}
      />
      <FormControl>
        <InputLabel htmlFor='propertytype'>Property Type</InputLabel>
        <Select
          name='property_type'
          label='Property Type'
          value={formState.property_type}
          onChange={e => onChangeForm(e)}
          inputProps={{
            name: 'Property Type',
            id: 'propertytype'
          }}

        >
          <MenuItem value={49002}>Apartment</MenuItem>
          <MenuItem value={16511}>House</MenuItem>
          <MenuItem value={2658}>Condominium</MenuItem>
          <MenuItem value={1692}>Townhouse</MenuItem>
          <MenuItem value={1244}>Loft</MenuItem>
          <MenuItem value={607}>Other</MenuItem>
          <MenuItem value={498}>Guesthouse</MenuItem>
          <MenuItem value={462}>Bed & Breakfast</MenuItem>
          <MenuItem value={366}>Bungalow</MenuItem>
          <MenuItem value={179}>Villa</MenuItem>
          <MenuItem value={142}>Dorm</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name='bathrooms'
        label='Bathrooms'
        value={formState.bathrooms}
        onChange={e => onChangeForm(e)}
      />
      <TextField
        name='bedrooms'
        label='Bedrooms'
        value={formState.bedrooms}
        onChange={e => onChangeForm(e)}
      />
      <TextField
        name='accommodates'
        label='Accommodates'
        value={formState.accommodates}
        onChange={e => onChangeForm(e)}
      />
      <TextField
        name='beds'
        label='Beds'
        value={formState.beds}
        onChange={e => onChangeForm(e)}
      />
      <FormControl>
        <InputLabel htmlFor='roomtype'>Room Type</InputLabel>
        <Select
          name='room_type'
          label='Room Type'
          value={formState.room_type}
          onChange={e => onChangeForm(e)}
          inputProps={{
            name: 'Room Type',
            id: 'roomtype'
          }}
        >
          <MenuItem value={41310}>Entire home/apt</MenuItem>
          <MenuItem value={30637}>Private room</MenuItem>
          <MenuItem value={2163}>Shared room</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='cancellationpolicy'>Cancellation Policy</InputLabel>
        <Select
          name='cancellation_policy'
          label='Cancellation Policy'
          value={formState.cancellation_policy}
          onChange={e => onChangeForm(e)}
          inputProps={{
            name: 'Cancellation Policy',
            id: 'cancellationpolicy'
          }}
        >
          <MenuItem value={"Strict"}>Strict</MenuItem>
          <MenuItem value={"Flexible"}>Flexible</MenuItem>
          <MenuItem value={"Moderate"}>Moderate</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='bedtype'>Bed Type</InputLabel>
        <Select
          name='bed_type'
          label='Bed Type'
          value={formState.bed_type}
          onChange={e => onChangeForm(e)}
          inputProps={{
            name: 'Bed Type',
            id: 'bedtype'
          }}
        >
          <MenuItem value={"Real bed"}>Real bed</MenuItem>
          <MenuItem value={"Futon"}>Futon</MenuItem>
          <MenuItem value={"Pull-out Sofa"}>Pull-out Sofa</MenuItem>
          <MenuItem value={"Airbed"}>Airbed</MenuItem>
          <MenuItem value={"Couch"}>Couch</MenuItem>
        </Select>
      </FormControl>
      {saveButtonEnabled && 
        <Button
          value='save changes'
          onClick={e => setSaveButtonEnabled(false)}
        >
          Save Changes
        </Button>
      }
    </div>
  )
}