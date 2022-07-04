import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from '@windmill/react-ui'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from '../components/DataTable'
import { BaseModal } from '../components/Modal'
import PageTitle from '../components/Typography/PageTitle'
import { EditIcon, TrashIcon } from '../icons'
import { setAuthToken } from '../instance/api'
import { defaultPricing, Pricing } from '../interface/Pricing'
import { fetchPricing, selectPricing } from '../store/pricingSlice'

export default function PricingPage() {

    const pricings = useSelector(selectPricing)
    const dispatch = useDispatch()
    const [isForm, setisForm] = useState(false)
    const [form, setform] = useState<Pricing>(defaultPricing)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        //setAuthToken(Cookies.get("authToken") || "")
        dispatch(fetchPricing())
    }

    const onEdit = (e: any) => {
        setisForm(true)
        setform(e)
    }

    return (
        <>
            <BaseModal isOpen={isForm} title="Pricing" onClose={() => setisForm(false)}>
                <div className="flex space-x-3">
                <Label>
                    <span>Title</span>
                    <Input className="mt-2 p-3" value={form.planName} onChange={e => setform({ ...form, planName: e.target.value })} css={""} />
                </Label>
                <Label className="mt-2">
                    <span>Price</span>
                    <Input className="mt-2 p-3" value={form.price} onChange={e => setform({ ...form, price: Number(e.target.value) })} css={""} />
                </Label>
                </div>
              
           
                <Label className="mt-2">
                    <div className="flex justify-between">
                        <span className="font-semibold text-xl">Features</span>
                        <EditIcon className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col mt-1 divide">
                        {form.features.map(f => {
                            return (
                                <div key={"fea" + f} className="p-1 flex justify-between">
                                    <div>{f}</div>
                                    <div className="flex space-x-3">
                                        <EditIcon className="h-6 w-6" />
                                        <TrashIcon className="h-6 w-6" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Label>
            </BaseModal>
            <PageTitle>Pricing</PageTitle>
            <div className="mt-4">

                <DataTable headers={["No", "Plan name", "Price"]} showFields={["planName", "price"]}
                    data={pricings} isAction name="pricing" onEdit={e => onEdit(e)} />

            </div>
        </>
    )
}
