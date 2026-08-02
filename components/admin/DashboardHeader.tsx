import ExportUsers from "./ExportUsers";
import AdminAccount from "./AdminAccount";


export default function DashboardHeader(){

return (

<div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6">

<div>

<h1 className="text-3xl font-black text-white">
SafeSpend Admin
</h1>

<p className="text-slate-400">
Manage beta users and growth
</p>

</div>


<ExportUsers />

<AdminAccount />


</div>

);

}