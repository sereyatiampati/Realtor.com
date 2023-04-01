import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function UpdateListing() {
    const [address, setAddress] = useState('');
    const [property_type, setPropertyType] = useState('');
    const [area_in_sqm, setAreaInSqm] = useState('');
    const [beds, setBeds] = useState('');
    const [baths, setBaths] = useState('');
    const [garages, setGarages] = useState('');
    const [price, setPrice] = useState('');
    const [image_url, setImage] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()
    const {id}=useParams()

    useEffect(()=> {
        if (id==='new') return;
        fetch(`/listings/${id}`)
        .then((r) => r.json())
        .then(({address, property_type, area_in_sqm, beds, baths, garages,price, image_url})=> {
                  setAddress(address);
                  setPropertyType(property_type);
                  setAreaInSqm(area_in_sqm);
                  setBeds(beds)
                  setBaths(baths);
                  setGarages(garages);
                  setPrice(price);
                  setImage(image_url);
        });
    },[])
  
    function handleSubmit (event){
      
      event.preventDefault();
      setErrors([])
      try {
        if (id === 'new') {
            fetch("/listings", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address,
                    property_type,
                    area_in_sqm,
                    beds,
                    baths,
                    garages,
                    price,
                    image_url,
                }),
              }).then((r) => {
                if (r.ok) {
                  alert("Submitted")
                  setAddress("");
                  setPropertyType("");
                  setAreaInSqm("");
                  setBeds("");
                  setBaths("");
                  setGarages("");
                  setPrice("");
                  setImage("");
                  return navigate('/my-properties')
                } else {
                  r.json().then((err) => setErrors(err.errors));
                }
              });
          }
          else{
            fetch(`/listings/${id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address,
                    property_type,
                    area_in_sqm,
                    beds,
                    baths,
                    garages,
                    price,
                    image_url,
                }),
              }).then((r) => {
                if (r.ok) {
                  alert("Updated!")
                  setAddress("");
                  setPropertyType("");
                  setAreaInSqm("");
                  setBeds("");
                  setBaths("");
                  setGarages("");
                  setPrice("");
                  setImage("");
                 return navigate('/my-properties')
                } else {
                  r.json().then((err) => setErrors(err.errors));
                }
              });      
          }
        
      } catch (error) {
        console.log(error)
      }
    }
      
    return (
    <div className='listing-form'>
        <h2>Property Information Form</h2>
        <form onSubmit={handleSubmit} style={{width: "750px"}}>
      <div className="form-group" >
        <label htmlFor="address">Address<span style={{color:"red"}}>*</span></label>
        <input type="text" className="form-control" id="address" name="address" value= {address} onChange={(event) => setAddress(event.target.value)} required />
      </div>

      <div class="form-group">
      <label htmlFor="property_type">Property Type<span style={{color:"red"}}>*</span></label>
        <select class="form-control" id="exampleFormControlSelect1" name="property_type" onChange={(event) => setPropertyType(event.target.value)} defaultValue={property_type}>
          <option value="" disabled selected>Select property type</option>
          <option value="Rent">Rent</option>
          <option value="Lease">Lease</option>
          <option value="Sell">Sell</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="area_in_sqm">Area (in sqm)<span style={{color:"red"}}>*</span></label>
        <input type="number" className="form-control" id="area_in_sqm" name="area_in_sqm" value={area_in_sqm} onChange={(event) => setAreaInSqm(event.target.value)} required min="1"/>
      </div>

      <div className="form-group">
        <label htmlFor="beds">Beds<span style={{color:"red"}}>*</span></label>
        <input type="number" className="form-control" id="beds" name="beds" value={beds} onChange={(event) => setBeds(event.target.value)} required min="1"/>
      </div>

      <div className="form-group">
        <label htmlFor="baths">Baths<span style={{color:"red"}}>*</span></label>
        <input type="number" className="form-control" id="baths" name="baths" value={baths} onChange={(event) => setBaths(event.target.value)} required  min="1"/>
      </div>

      <div className="form-group">
        <label htmlFor="garages">Garages<span style={{color:"red"}}>*</span></label>
        <input type="number" className="form-control" id="garages" name="garages" value={garages} onChange={(event) => setGarages(event.target.value)} min="1" required />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price<span style={{color:"red"}}>*</span></label>
        <input type="number" className="form-control" id="price" name="price" value={price} onChange={(event) => setPrice(event.target.value)} required min="100"/>
      </div>

      <div className="form-group" >
        <label htmlFor="address">Image URL<span style={{color:"red"}}>*</span></label>
        <input type="text" className="form-control" id="image" name="image" value={image_url} onChange={(event) => setImage(event.target.value)} required />
      </div>
        {
            errors?.length > 0 ? errors.map((error)=><li style={{color: "red", fontSize: "12px"}} key={error}>{error}</li>) : ""
        }
      <button type="submit" className="btn btn-primary" style={{marginTop: "15px"}}>{id==='new' ? 'Post' : 'Update'}</button>
    </form>
    </div>
    )
}
export default UpdateListing;