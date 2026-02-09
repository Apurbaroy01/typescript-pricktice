import React from 'react'

type DataFetchProps = {
    status: "loading" | "error" | "success";
}


const DataFetch = ({status}: DataFetchProps) => {

    if(status === "loading"){
        return <p>Data is Loading....</p>
    }

    else if(status === "error"){
        return <p>Error. Data could not fetched</p>
    }

    else if(status === "success"){
        return <p>Data fetched successfully</p>
    }

  return (
    <div>
        <p>Data  Fatched not successFully  </p>
    </div>
  )
}

export default DataFetch
