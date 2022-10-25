import '../Style/Home.css'
import Table from '../Components/Table'
import {useEffect, useState} from 'react'
import axios from 'axios'
export default function Home() {
    const [content,setContent] = useState(null)


    useEffect(()=>{
        function fetchData() {
            axios.get("http://localhost:8000/articles/4/0").then(res => {

                if(!content) {
                    console.log("set data")

                    res.data.forEach(el => {
                        delete el.CreatedAt
                        delete el.UpdatedAt
                        delete el.DeletedAt
                    })
                    setContent(res.data)
                }
                console.log(content, "<<<<<")
            })
        }
        fetchData()
    }, [content])


    if(!content) {
        return(
            <h1>Loading ...</h1>
        )
    }else {
        return (
            <>
                        <div className="w-75">
            <Table payload={{
                items : ['ID', 'Title','Content', 'Category', 'Status'],
                body : content
            }}/>
        </div>
            </>

        )
    }

}