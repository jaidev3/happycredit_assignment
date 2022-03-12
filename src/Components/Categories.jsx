import React from 'react'
import styled from 'styled-components'
function Categories() {
  return (
    <Wrapper>
      <div>
          <h3>Categories</h3>
      </div>
      <div>
      <h3>Filter</h3>
          <div>
          <h4>Types</h4>
          </div>
          <div>
          <h4>Discount</h4>
          </div>
      </div>
    </Wrapper>
  )
}

export default Categories

const Wrapper = styled.div`
font-family: sans-serif;
`;