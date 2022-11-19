import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Blog from '../pages/Blog'
import arrow_right from '../icons/arrow-right.png'
import arrow_left from '../icons/arrow-left.png'

const ButtonSection = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
`
const StyledButton = styled.button`
    border: 1px solid #233BA9;
    padding: 8px 16px;
    color: #233BA9;
    width: 36px;
`

const DirectionalButton = styled(StyledButton)`
    background-color: #233BA9;
    color: #fff;
    width: 72px;
`

const FadedButton = styled(StyledButton)`
    color: #D2D3D4;
    border: 1px solid #D2D3D4;
`

const FadedDirectionalButton = styled(DirectionalButton)`
    background-color: #fff;
    width: 72px;
    border: 1px solid #d2d3d4;
    color: #d2d3d4;
`


function Page({ display }) {
  return (
    <div>
        {display == false ?
        <ButtonSection>
            <StyledButton>1</StyledButton>
            <FadedButton>2</FadedButton>
            <FadedButton>3</FadedButton>
            <FadedButton>4</FadedButton>
            <FadedButton>5</FadedButton>
            <DirectionalButton><img src={arrow_right} alt="" /></DirectionalButton>
        </ButtonSection>
        :
        <ButtonSection>
            <FadedDirectionalButton><img src={arrow_left} alt="" /></FadedDirectionalButton>
            <StyledButton>1</StyledButton>
            <FadedButton>2</FadedButton>
            <FadedButton>3</FadedButton>
            <FadedButton>4</FadedButton>
            <FadedButton>5</FadedButton>
            <FadedButton>6</FadedButton>
            <FadedButton>7</FadedButton>
            <FadedButton>8</FadedButton>
            <FadedButton>9</FadedButton>
            <FadedButton>10</FadedButton>
            <DirectionalButton><img src={arrow_right} alt="" /></DirectionalButton>
        </ButtonSection>
        }       
    </div>
  )
}

Page.propTypes = {
    display: PropTypes.bool
}

export default Page;
