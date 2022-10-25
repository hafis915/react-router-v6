// import {CInput, CRow, CCOl } from '@coreui/react'

import { CCol, CRow ,  CFormInput, CFormTextarea, CButton} from "@coreui/react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function NewPost() {
    const [title,setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    const [status, setStatus] = useState('')
    const navigate = useNavigate()

    function handleSubmit(params) {
        const _payload = {
            Title : title,
            Content : content,
            Category : category,
            Status : status
        }

        const data = JSON.stringify(_payload)
        var config = {
            method: 'post',
            url: 'http://localhost:8000/article',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            navigate('/')
        })
        .catch(function (error) {
        console.log(error);
        });
    }
    return(
        <div className="new-post-form w-100 ">
            <CRow className="m-2 ">
                <CCol lg="12">
                    <CFormInput label="title" onInput={e => setTitle(e.target.value)}/>
                </CCol>

                <CCol lg="12">
                    <CFormTextarea label="Content" onInput={e => setContent(e.target.value)}/>
                </CCol>

                <CCol lg="12">
                    <CFormInput label="Category" onInput={e => setCategory(e.target.value)}/>
                </CCol>

                <CCol lg="12">
                    <CFormInput label="Status" onInput={e => setStatus(e.target.value)}/>
                </CCol>
            </CRow>

            <CButton className="m-4" onClick={handleSubmit}>Submit</CButton>
        </div>
    )
}