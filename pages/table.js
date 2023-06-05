import React from 'react';
import { Table, useAsyncList,Container } from "@nextui-org/react";

export async function getServerSideProps() {
    const jsonData = require('../source/ege_clean.json');
  
    return {
      props: {
        jsonData,
      },
    };
  }
  

const TableWrapper = ({ jsonData }) => {
    const col=Object.keys(jsonData[0])
    
    return (
        <Container>

        <Table
      aria-label="Example static collection table"
      css={{
        height: "auto",
        maxWidth: "100%",
      }}
      selectionMode="single"
    >
      <Table.Header>
        {col.map((row,index)=>(
            <Table.Column>{JSON.stringify(row)}</Table.Column>
        ))}
        
      </Table.Header>
      <Table.Body >
        {jsonData.map((row,index)=>
        (
            <Table.Row css={{maxWidth:"1%"}} key={index}>
            {col.map((cl,j)=>
            (
                <Table.Cell   >{  row[cl]}</Table.Cell>
            )
            )}
            
           
          </Table.Row>
        )
        )}
      

      </Table.Body>
    </Table>

    </Container> 
  );
}


export default TableWrapper;
