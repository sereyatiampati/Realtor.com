import React, {useState} from 'react'

function AddListing({user}) {
    const [address, setAddress] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [areaInSqm, setAreaInSqm] = useState('');
    const [beds, setBeds] = useState('');
    const [baths, setBaths] = useState('');
    const [garages, setGarages] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState([]);
  
    function handleSubmit (event){
      event.preventDefault();
      setErrors([])
      fetch("/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address,
          property_type: propertyType,
          area_in_sqm: areaInSqm,
          beds,
          baths,
          garages,
          price,
          image_url: image,
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
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });      
    }
      
    return (
    <div className='container listing-form'>
        <h2>Property Information Form</h2>
        <form onSubmit={handleSubmit} style={{width: "750px"}}>
      <div className="form-group" >
        <label htmlFor="address">Address<span style={{color:"red"}}>*</span></label>
        <input type="text" className="form-control" id="address" name="address" value={address} onChange={(event) => setAddress(event.target.value)} required />
      </div>

      <div className="form-group">
        <label htmlFor="property_type">Property Type<span style={{color:"red"}}>*</span></label>
        <input type="text" className="form-control" id="property_type" name="propertyType" value={propertyType} onChange={(event) => setPropertyType(event.target.value)} required />
      </div>

      <div className="form-group">
        <label htmlFor="area_in_sqm">Area (in sqm)<span style={{color:"red"}}>*</span></label>
        <input type="number" className="form-control" id="area_in_sqm" name="areaInSqm" value={areaInSqm} onChange={(event) => setAreaInSqm(event.target.value)} required min="1"/>
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
        <input type="text" className="form-control" id="image" name="image" value={image} onChange={(event) => setImage(event.target.value)} required />
      </div>
        {
            errors?.length > 0 ? errors.map((error)=><li style={{color: "red", fontSize: "12px"}} key={error}>{error}</li>) : ""
        }

      <input type="hidden" name="user_id"  required />

      <button type="submit" className="btn btn-primary" style={{marginTop: "15px"}}>Submit</button>
    </form>
    </div>
    )
}
export default AddListing;