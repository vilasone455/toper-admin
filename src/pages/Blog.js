import React, { useState } from 'react'
import { selectBlog } from '../store/blogSlice'
import { useSelector } from 'react-redux'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PageTitle from '../components/Typography/PageTitle';
import UploadAdapter from '../components/UpdateAdapter'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import DataTable from '../components/DataTable';

export default function Blog() {

    const blogs = useSelector(selectBlog)
    const [editId, seteditId] = useState("")
    const [isForm, setisForm] = useState(false)

    const [body, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
       // onSubmit({ body })
    }

    return (
        <>
            <PageTitle>Blog</PageTitle>
            {isForm ? <form onSubmit={handleSubmit}>
                <Label>
                    <span>Title</span>
                    <Input className="mt-2 p-3" placeholder="Jane Doe" />
                </Label>
                <Label className="mt-2">
                    <span>Category</span>
                    <Select className="mt-2 p-3" placeholder="Category"  />
                </Label>
                <Label className="mt-2">
                    <span>Description</span>
                    <div className="mt-2">
                        <CKEditor
                            onReady={(editor) => {
                                editor.plugins.get('FileRepository')
                                    .createUploadAdapter = (loader) => {
                                        console.log("file init")
                                        let rs = new UploadAdapter(loader)
                                        console.log(rs)
                                        return rs
                                    }
                            }}
                            editor={ClassicEditor}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setBody(data)
                            }}
                        />
                    </div>


                </Label>
                <button type="submit">Save</button>

            </form> : <div>
                <div>
                    <button onClick={()=>setisForm(true)}>Add Blog</button>
                </div>
                <div className="mt-4">
                    <DataTable headers={["Title" , "Category" , "Create Date"]} showFields={["title" , "category" , "create_date"]} data={blogs} 
                    crudActions />
                </div>
               
            </div>}
        </>
    )
}
