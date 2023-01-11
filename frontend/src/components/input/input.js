function Input({label,type,placeholder}){


    return (
        <div>
            <label class="block relative">
                <span
                    class="text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"
                    >{ label }</span
                >
            <input

                class="border rounded-lg py-4 focus:outline-white form-input mt-1 pl-6 block w-full"
                type={type}
                placeholder={placeholder}
            />
        </label>
        </div>
    )
}

export default Input