import React,{useState,useEffect} from "react";
import { useQuery } from "@tanstack/react-query";
import { Apis } from "../utils/apis";
import { Pagination, Table } from "flowbite-react";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import axios from "axios";
const TableList = ({ headers, variant, setState}) => {
const [clickedId,setClickedId]=useState("")
  const {  isError,isLoading, data } = useQuery(
    ["getDataCount"],
    Apis.getAllPromocodeCount
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);


  const onPageChange=(page)=>{
      setCurrentPage(page)
  }
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data?.data?.slice(indexOfFirstPost, indexOfLastPost);

useEffect(()=>{
  setCurrentPage(1)
},[data])

 const handleExport=async(id)=>{  
    const response = await Apis.getExcelPromocodes(id);
  const url = window.URL.createObjectURL(new Blob([response]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'file.xlsx');
  document.body.appendChild(link);
  link.click();
  

}

  
  
  return (
    <div className="w-full">
    
        <Table hoverable={true}>
          <Table.Head className="!px-10 bg-white border-b">
            {headers.map((header, id) => (
              <Table.HeadCell key={id} className="text-sm font-semibold">
                {header}
              </Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className="divide-y">
            {currentPosts?.map(
              ({
                merchantName,
                updatedDate,
                id,
                description,
                count,
                promocodeType,
                source,
              }) => (
                <Table.Row
                  key={id}
                  className="font-normal bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{updatedDate}</Table.Cell>
                  <Table.Cell>{merchantName}</Table.Cell>
                  <Table.Cell className="text-blue-700">
                    {description}
                  </Table.Cell>
                  <Table.Cell>{count}</Table.Cell>
                  <Table.Cell>{promocodeType}</Table.Cell>
                  <Table.Cell>{source}</Table.Cell>
                  <Table.Cell style={{cursor:"pointer"}}>
                    <button onClick={()=>{handleExport(id)}}>ZIP</button>
                  </Table.Cell>
                </Table.Row>
              )
            )}
            
          </Table.Body>
        </Table>
      
      <div className="flex items-center justify-end py-4 text-center">
      <Pagination currentPage={currentPage} totalPages={Math.ceil(data?.data?.length /15) || 10} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default TableList;
