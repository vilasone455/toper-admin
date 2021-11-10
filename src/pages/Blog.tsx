import React, { useState } from 'react'
import { selectBlog } from '../store/blogSlice'
import {useSelector} from 'react-redux'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PageTitle from '../components/Typography/PageTitle';

export default function Blog() {

    const blogs = useSelector(selectBlog)
    const [editId, seteditId] = useState("")
    const [isForm, setisForm] = useState(true)

    return (
        <>
             <PageTitle>Blog</PageTitle>
            {isForm ? <div>

                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div> : <div>

            </div>}
        </>
    )
}
