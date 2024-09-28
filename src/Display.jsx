function Display({time}){

    function formatTime(seconds){
        const mins = Math.floor(seconds/60).toString()
        const sec = (seconds % 60).toString()
        return `${mins}:${sec}`
    }

    return (
    <>
        <div className="timer mb-8 min-w-fit rounded p-2 bg-slate-500 text-2xl">
            {formatTime(time)}
        </div>
    </>
    )
}

export default Display