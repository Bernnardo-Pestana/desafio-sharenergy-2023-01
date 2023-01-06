import './Datalist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pagination from '../pagination/pagination';
import React, { useState, useMemo } from 'react';


let PageSize = 5;

function Datalist({header,data,options}){
    
    
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return(
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="border-b">
                                <tr  className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                                    {
                                        header.map(head => {
                                            return(
                                                <th key={head.label} scope="col" className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                                                    { head.label }
                                                </th>
                                                )
                                            }
                                        )
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentTableData.map((data,index2)=>{
                                        return(
                                           <tr key={index2} className='border-b'>
                                            {
                                                header.map((item,index)=>{
                                                   if( item.value !== ''){
                                                    return(
                                                        <th  className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left' key={index}>
                                                            {data[item.value]}
                                                        </th>
                                                    )
                                                   }else{
                                                    return(
                                                        <th  className=' flex relative h-full items-end px-4 py-4 text-sm' key={index}>
                                                            <div className='flex h-full absolute top-0 justify-start items-end space-x-4 text-sm '>
                                                                {
                                                                    options.map((option,index)=>{
                                                                        if(option.pen){
                                                                            return(
                                                                                <FontAwesomeIcon  icon="fa-solid fa-pen" size="xl"/> 
                                                                            )
                                                                        }
                                                                        if(option.trash){
                                                                            return(
                                                                                <FontAwesomeIcon icon="fa-solid fa-trash" size="xl"/>
                                                                            )
                                                                        }
                                                                    })
                                                                }
                                                            </div>
                                                        </th>
                                                    )
                                                   }
                                                })
                                            }
                                           </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
                
            </div>
            <div className='flex justify-center'>
                    <Pagination
                                    className="pagination-bar"
                                    currentPage={currentPage}
                                    totalCount={data.length}
                                    pageSize={PageSize}
                                    onPageChange={page => setCurrentPage(page)}
                    />
            </div>
        </div>
        
    )
}

export default Datalist