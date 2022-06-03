import React, {useState} from 'react'
import {Button, Form, Row, Col} from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let navigation = useNavigate()
    let location = useLocation()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword){
            console.log(keyword)
            navigation(`/?keyword=${keyword}&page=1`)
        }else if(keyword === ''){
            console.log('works')
            navigation(`/`)
        }
    }

  return (
    <Form onSubmit={submitHandler}  style={{display: 'inline-flex'}}>
        <Form.Control
            type='text'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className='mr-sm-2 m1-sm-5'
        ></Form.Control>
        
        <Button
            type='submit'
            variant='outline-success'
            className='p-2'
        >
            Submit
        </Button>
    </Form>
  )
}

export default SearchBox