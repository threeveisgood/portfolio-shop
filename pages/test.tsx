import React, { ReactElement } from "react";
import FilesUpload from "components/upload/files-upload";

export default function test(): ReactElement {  

  return (
    <div>
      <FilesUpload />      
    </div>
  );
}

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
