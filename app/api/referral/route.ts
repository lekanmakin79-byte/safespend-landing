import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


export async function GET(
request: Request
){

const {searchParams}=new URL(request.url);


const email =
searchParams.get("email");


if(!email){

return NextResponse.json(
{
error:"Email required"
},
{
status:400
}
);

}



const {data,error}=await supabase
.from("waitlist")
.select("*")
.eq("email",email)
.single();



if(error){

return NextResponse.json(
{
error:"User not found"
},
{
status:404
}
);

}



return NextResponse.json({

user:data

});


}