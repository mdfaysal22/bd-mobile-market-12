import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ReportedCard from './ReportedCard/ReportedCard';

const ReportedItem = () => {
    const {data: reportedProducts = [], refetch} = useQuery({
        queryKey:["products"],
        queryFn: () => 
        fetch(`http://localhost:5000/reportedProducts?report=Reported`)
        .then(res => res.json())
    })

    console.log(reportedProducts);
    return (
        <div>
            <div>
                <h1 className='text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400'>Reported Products List</h1>
            </div>
            <div>
                {
                    reportedProducts.map(reportedProduct => <ReportedCard refetch={refetch} reportedItems={reportedProduct} key={reportedProduct._id}></ReportedCard>)
                }
            </div>
        </div>
    );
};

export default ReportedItem;