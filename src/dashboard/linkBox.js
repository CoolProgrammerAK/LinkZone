import React from 'react'
import {MDBTypography} from 'mdbreact'
function LinkBox({profile}) {
    return (
        <div className="datas mb-3">
        <MDBTypography
          tag="h4"
          variant="h4-responsive"
          style={{ display: "inline-block", fontWeight: "bold" }}
        >
          My Bio Link:
        </MDBTypography>
        <a
          href={`/admin/${profile.userhandle}`}
          target="_blank"
          rel="noopener noreferrer"
          id="link"
        >
          <strong>
            {window.location.origin}/admin/{profile.userhandle}
          </strong>
        </a>
      </div>
    )
}

export default LinkBox
