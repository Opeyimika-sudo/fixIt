import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import search from '../icons/search.png'
import Blog from '../pages/Blog'

const StyledForm = styled.form`
    border: 1px solid #E4E4E5;
    border-radius: 8px;
    width: 40%;
    margin: 30px auto;
    padding: 10px auto;
`

const MobileForm = styled(StyledForm)`
    width: 60%;
`

const StyledInput = styled.input`
    padding: 10px;
    border: 0;
    margin: auto 10px;
    &:placeholder {
        padding: 10px;
        border: 0;
        margin: auto 10px;
    }
`

const StyledImg = styled.img`
    margin-left: 10px;
    margin: auto 0 auto 10px;
`

function Search({ display }) {
    console.log(display);
  return (
    <>
    { display == false ?
        <MobileForm>
            <StyledImg src={search} alt="" />
            <StyledInput type="text" placeholder="Search for anything..."/>
        </MobileForm>
        :
        <StyledForm>
            <StyledImg src={search} alt="" />   
            <StyledInput type="text" placeholder="Search for anything..."/>
        </StyledForm>
    }
    </>
  )
}

export default Search;
