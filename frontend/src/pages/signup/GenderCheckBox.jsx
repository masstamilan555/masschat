
const GenderCheckBox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div>
        <div className="flex mt-2">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender ==="male" ? "selected": ""}`}>
                        <span className='label-text '>Male</span>
                        <input type="checkbox" className='checkbox border-gray-100' checked={selectedGender==="male" }onChange={()=> onCheckboxChange("male")}/>
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender ==="female" ? "selected": ""}`}>
                        <span className='label-text '>Female</span>
                        <input type="checkbox" className='checkbox border-gray-100'  checked={selectedGender==="female" }onChange={()=> onCheckboxChange("female")} />
                </label>
            </div>
        </div>
    </div>
  )
}

export default GenderCheckBox