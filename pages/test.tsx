import Card from "components/styled/card";
import React, { ReactElement } from "react";
import styled from 'styled-components'

export default function test(): ReactElement {  

  return (
    <div>
      <CardUl>
       <Card />
       <Card />
       <Card />
       <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
      </CardUl>     
    </div>
  );
}

const CardUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  gap: 1.3rem;  
`
// import React, { useCallback, ReactElement } from "react";
// import { useDispatch } from 'react-redux'
// import { setImageLinks } from "modules/addPost";
 
// export default function test(): ReactElement {  
//   const dispatch = useDispatch()
 
//   const addImageLink = useCallback(() => dispatch(setImageLinks("image added")), [dispatch])
 
//   return (
//     <div>
//       <button onClick={addImageLink}>hello</button>
//     </div>
//   );
// }
