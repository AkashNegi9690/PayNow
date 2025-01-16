export function InputBox({label, placeholder,onChange,type}) {
    return <div>
      <div className="text-sm font-medium text-left py-2 text-gray-900">
        {label}
      </div>
      <input onChange={onChange} placeholder={placeholder} type={type} className="w-full px-2 py-1 border rounded border-slate-200 text-gray-500" required/>
    </div>
}