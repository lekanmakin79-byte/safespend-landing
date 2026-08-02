import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


export async function GET(request:Request){


const {searchParams}=new URL(request.url);


const code =
searchParams.get("code");



if(!code){

return NextResponse.json([]);

}



const {data,error}=await supabase

.from("notifications")

.select("*")

.eq(
"user_code",
code
)

.order(
"created_at",
{
ascending:false
}
);



if(error){

return NextResponse.json(
{
error:error.message
},
{
status:500
}
);

}



return NextResponse.json(data);


}