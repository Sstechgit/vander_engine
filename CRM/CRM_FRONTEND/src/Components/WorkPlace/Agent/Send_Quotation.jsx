import { Button } from 'antd'
import React, { useState } from 'react'
import Add_Quotation from './Add_Quotation';
import { urls } from '../../../../links';
import { DoFetch } from '../../../Utils/DoFetch';
import { getErrors } from '../../../Utils/ExtractError';

export default function Send_Quotation({ record, concat = false,
    func = null,
    setBody = null, }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const AddQuotation = async ({
        part,
        year,
        make,
        model,
        variant,
        pricing,
        miles,
        stock,
        description, // Optional
        setErrors,
    }) => {
        const url = "http://backend.sstechcrm.com/api/SendQuotations";
    
        let body = {
            email: record.email, // Required email from frontend
            part,
            year,
            make,
            model,
            variant,
            pricing,
            miles,
            stock,
        };
    
        if (description) {
            body.description = description; // Add only if available
        }
    
        const result = await DoFetch(url, "POST", JSON.stringify(body), {
            "Content-Type": "application/json",
        });
    
        console.log(result);
    
        if (result.success === true) {
            alert("Quotation email sent successfully!");
            return true;
        } else {
            let err = getErrors(result, [
                "part",
                "year",
                "make",
                "model",
                "variant",
                "pricing",
                "miles",
                "stock",
                "description",
            ]);
            setErrors(err);
            return false;
        }
    };
    
    return (
        <div>
            <Button type="primary" onClick={showModal} >
                Send Quotation
            </Button>
            <Add_Quotation
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                onClick={AddQuotation}
                parameter={true}
            />
        </div >
    )
}
