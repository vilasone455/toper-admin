import React, { FC, useState } from 'react';
import { useHistory } from 'react-router';
import {
    TableContainer,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableFooter,
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../icons';

interface DataTableProp {
    headers: string[]
    name: string
    data: any[]
    onStartChangePage?: (page: number) => void
    onFinishChange?: (e: any[]) => void
    onEdit?: (e: any) => void
    onDelete?: (e: any) => void
    crudActions?: string[]
    isAction: boolean
    ignoreField?: string[]
    showPagination?: boolean
    perPage?: number
    count?: number
    tfoot?: any
    icons?: string[]
    hideCrud?: boolean
    onAction?: (id: string, e: string) => void
    showFields: string[]
}

const DataTable: FC<DataTableProp> = ({ showFields, icons = [], tfoot, hideCrud, onAction, count = 5, perPage = 5, showPagination, name, headers, data, crudActions, onEdit, onDelete, isAction, ignoreField }) => {

    //let query = useQuery();
    const totalPages = Math.ceil(count / perPage)

    const [pages, setpages] = useState<number[]>([])

    // const currentPage = query.get("page") ? Number(query.get("page")) : 1

    const onEditTrigger = (d: any) => {
        alert("on edit")
        if (onEdit) onEdit(d)
    }

    const onDeleteTrigger = (d: any) => {
        alert(d._id)
        if (onDelete) onDelete(d._id)
    }

    const triggerAction = (data: any, e: string) => {
        if (onAction) onAction(data._id, e)
    }

    return (
        <>

            <TableContainer>
                <Table>
                    <TableHeader>
                        <TableRow>

                            {headers.map(h => {
                                return <TableCell className="thead" key={"tb" + name + h}>{h}</TableCell>
                            })}
                            {isAction ? <TableCell className="thead">Actions</TableCell> : ""}


                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((d, i) => {
                            return (
                                <TableRow key={"row" + d._id + name}>
                                    {headers.includes("No") ? <TableCell className="trow">{i + 1}</TableCell> : ""}
                                    {Object.entries(d).map((t, k) => {
                                        return (
                                            <>
                                                {showFields?.includes(t[0]) ? <TableCell className="trow">{t[1]}  </TableCell> :
                                                    ""}
                                            </>
                                        )
                                    })}
                                    {isAction ? <TableCell className="flex space-x-2">
                                        {hideCrud ? "" : <>
                                            <div onClick={() => onEditTrigger(d)}>
                                                <EditIcon className="w-6 h-6" name="edit" color="gray" />
                                            </div>
                                            <div onClick={() => onDeleteTrigger(d)}>
                                                <TrashIcon className="w-6 h-6" name="delete" color="gray" />
                                            </div>
                                        </>}

                                    </TableCell> : ""}
                                </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>
                <TableFooter>

                </TableFooter>
            </TableContainer>

        </>
    )
}

export default DataTable;
