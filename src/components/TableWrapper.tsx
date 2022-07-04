import { Table, TableBody, TableCell, TableContainer, TableHeader, TableRow } from '@windmill/react-ui'
import React, { FC } from 'react'

interface Prop {
    headers: string[]
}

const TableWrapper: FC<Prop> = ({ headers, children }) => {
    return (
        <TableContainer>
            <Table>
                <TableHeader>
                    <TableRow>
                        {headers.map(h => {
                            return <TableCell className="thead" key={"tb"  + h}>{h}</TableCell>
                        })}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableWrapper
