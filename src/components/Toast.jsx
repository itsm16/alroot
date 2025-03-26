import { useState } from "react"

function Toast({toast, setToast}) {
    

    setTimeout(()=>{
        setToast(false)
    }, 3000)

    return (
        <div className={`${toast ? `toast` : `hidden`} toast-top toast-end mt-20`}>
            <div className="alert alert-info bg-white text-black border-none font-semibold">
                <span>Feedback recorded.</span>
            </div>
        </div>
    )
}
export default Toast