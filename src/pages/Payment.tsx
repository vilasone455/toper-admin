import React, { useEffect, useState } from 'react'
import DataTable from '../components/DataTable'
import { editPayment, fetchPayment, selectPayment } from '../store/paymentSlice'
import {useSelector} from 'react-redux'
import api, { setAuthToken } from '../instance/api'
import Cookies from 'js-cookie'
import {useDispatch} from 'react-redux'
import TableWrapper from '../components/TableWrapper'
import { Badge, TableCell, TableRow } from '@windmill/react-ui'
import PageTitle from '../components/Typography/PageTitle'
import { StatusData } from '../instance/Status'
import { ChartsIcon } from '../icons'

export default function Payment() {

    const payments = useSelector(selectPayment)
    const dispatch = useDispatch()


    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        setAuthToken(Cookies.get("authToken")  || "")
        console.log("heyy")
        dispatch(fetchPayment())
    }

    const onConfrim = async (id : string) => {
        let changePayment = payments.find(p=>p._id === id)
        if(changePayment) {
            if(changePayment.status === 0) {
            return 
        }}
        try {
            await api.get("/payment/confrim/"+id)

            changePayment.status = 1
            dispatch(editPayment({changes : changePayment , id : id}))
            
        } catch (error) {
            
        }
       
    }

    return (
        <div>
            <PageTitle>Payments</PageTitle>
            <div className="mt-4 bg-white p-4 shadow rounded-md">
            <TableWrapper headers={["User" , "Pricing" , "Date" , "Status" , "Action"]}>
                {payments.map(p=>{
                    return (
                        <TableRow key={"tb"+p._id}>
                            <TableCell>{p.user.userEmail}</TableCell>
                            <TableCell>{p.pricing.planName}</TableCell>
                            <TableCell>{new Date(p.paymentDate).toDateString()}</TableCell>

                            <TableCell>
                                <Badge type={StatusData[p.status].color}>{StatusData[p.status].txt}</Badge>
                            </TableCell>
                            <TableCell className="flex space-x-3">
                                <ChartsIcon onClick={()=>onConfrim(p._id)} fontSize={15} className="w-6 h-6" />
                                <ChartsIcon onClick={()=>onConfrim(p._id)} fontSize={15} className="w-6 h-6" />
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableWrapper>
            </div>
            
        </div>
    )
}
