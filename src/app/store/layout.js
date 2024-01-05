import Sidebar from "../ui/sidebar/Sidebar";

export const metadata ={
    title:'Buy or Rent Book',
    Description:'An online Book Store',
}

export default function BookStoreLayout ({children}){

    return(
<div className=" flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
    <div className=" flex flex-wrap p-2 justify-center">
        <Sidebar/> 
        {children}
    </div>
</div>
    )
}