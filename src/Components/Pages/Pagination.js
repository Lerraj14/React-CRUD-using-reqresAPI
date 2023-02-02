
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
  
const App=function ({togglePageHandler}) {
  
    return (
        <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <Pagination>
                <PaginationItem>
                    <PaginationLink href="#" onClick={()=>togglePageHandler(1)}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={()=>togglePageHandler(2)}>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={()=>togglePageHandler(3)}>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={()=>togglePageHandler(4)}>4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={()=>togglePageHandler(5)}>5</PaginationLink>
                </PaginationItem>
            </Pagination>
        </div >
    );
}
  
export default App;