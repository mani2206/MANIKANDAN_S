import React from 'react'
import ContentLoader from "react-content-loader";

export default function LoaderPage() {
  return (
    <div className="loader">      
        <div >
          <ContentLoader height={"250px"} width={500} speed={1} className='loading_page'>
            {/* Only SVG shapes */}

            <rect x="65" y="20" rx="5" ry="5" width="300" height="200" />
          </ContentLoader>
        </div>
        <div>
          <ContentLoader height={"150px"} width={500} speed={1}  className='loading_page'>
            {/* Only SVG shapes */}
            <rect x="70" y="50" rx="5" ry="5" width="300" height="15" />
            <rect x="70" y="80" rx="5" ry="5" width="300" height="15" />
            <rect x="70" y="110" rx="5" ry="8" width="300" height="15" />
            <rect x="70" y="140" rx="5" ry="8" width="300" height="15" />
          </ContentLoader>
        </div>
      </div>
  )
}
