import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell,CTableRow  } from "@coreui/react";

export default function Table({payload}) {
    const items = payload && payload.items ? payload.items : []
    const body = payload && payload.body ? payload.body : []

    return (
        <CTable>
            <CTableHead>
                <CTableRow>
                    {items.map((el,idx) => <CTableHeaderCell key={idx}>{el}</CTableHeaderCell>)}
                </CTableRow>
            </CTableHead>

            <CTableBody>

                {
                body.map(el => {
                    
                    return <CTableRow key={el.ID}>
                        {
                            Object.keys(el).map((key,idx) => {
                                return <CTableDataCell
                                key={idx}>{el[key]}</CTableDataCell>
                            })
                        }
                        
                    </CTableRow>
                }
                
                
               
                )
                
                }
                
            </CTableBody>

        </CTable>
    )

}