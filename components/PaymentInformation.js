export default function PaymentInformation({ inputs, setInputs }) {
    return (
        <>
            <div className="border-2 border-purple-800 py-3 px-5">
                <div className="form-input-wrapper w-full">
                    <input
                        name="cardHolderName"
                        type="text"
                        className={`border-b w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                        placeholder="Kart Sahibinin Adı Soyadı"
                        onChange={setInputs}
                        value={inputs.cardHolderName}
                    />
                </div>

                <div className="form-input-wrapper w-full mt-5">
                    <input
                        name="cardNumber"
                        type="text"
                        className={`border-b w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                        placeholder="Kart Numarası"
                        onChange={setInputs}
                        value={inputs.cardNumber}
                    />
                </div>

                <div className="form-input-wrapper w-full mt-5">
                    <input
                        name="expireMonth"
                        type="text"
                        className={`border-b w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                        placeholder="Ay"
                        onChange={setInputs}
                        value={inputs.expireMonth}
                    />
                </div>

                <div className="form-input-wrapper w-full mt-5">
                    <input
                        name="expireYear"
                        type="text"
                        className={`border-b w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                        placeholder="Yıl"
                        onChange={setInputs}
                        value={inputs.expireYear}
                    />
                </div>

                <div className="form-input-wrapper w-full mt-5">
                    <input
                        name="cvc"
                        type="text"
                        className={`border-b w-full py-1.5 rounded-sm pl-2 focus:outline-none segoe`}
                        placeholder="Cvc"
                        onChange={setInputs}
                        value={inputs.cvc}
                    />
                </div>
            </div>
        </>
    )
}
