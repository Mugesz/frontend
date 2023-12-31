import React, { useRef } from 'react';
import './search-bar.css';
import {Col, Form, FormGroup} from "reactstrap";


const SearchBar = () => {
   
    const loactionRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)


    const searchHandler = () =>{
        const location = loactionRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if(location==='' || distance==='' || maxGroupSize===''){
            return alert("All fields are required")
        }

    }




  return (
    <Col lg="12">
       <div className="search__bar">
        <Form action="" className="d-flex align-items-center gap-4">
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i className="ri-map-pin-line"></i></span>
                <div className="">
                    <h6>Location</h6>
                    <input type="text" placeholder='where are you Going' ref={loactionRef} />
                </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i className="ri-map-pin-time-line"></i></span>
                <div className="">
                    <h6>Distance</h6>
                    <input type="number" placeholder='Distance k/m' ref={distanceRef} />
                </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i className="ri-group-line"></i></span>
                <div className="">
                    <h6>Max People</h6>
                    <input type="number" placeholder='0' ref={maxGroupSizeRef} />
                </div>
            </FormGroup>

           <span className="search__icon" type="submit" onClick={searchHandler}>
           <i className="ri-search-line"></i>
          </span>

        </Form>
       </div>
    </Col>
  )
}

export default SearchBar
