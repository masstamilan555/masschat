
const GenderCheckBox = () => {
  return (
    <div>
        <div className="flex mt-2">
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                        <span className='label-text '>Male</span>
                        <input type="checkbox" className='checkbox border-gray-100' />
                </label>
            </div>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                        <span className='label-text '>Female</span>
                        <input type="checkbox" className='checkbox border-gray-100' />
                </label>
            </div>
        </div>
    </div>
  )
}

export default GenderCheckBox