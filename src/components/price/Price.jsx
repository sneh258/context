import React from 'react'
import { firstname ,lastname} from '../../App'

export default function Price() {
  return (
    <>
      <firstname.Consumer>
        {(fname) => {
          return (<>
            <lastname.Consumer>{(lastname) => {
              return <h1>my name is {fname} {lastname}</h1>;
            }}
            </lastname.Consumer>
          </>)
          
        }}
      </firstname.Consumer>
    </>
  );
}
