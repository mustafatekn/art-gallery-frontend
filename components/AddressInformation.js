export default function AddressInformation({ inputs, setInputs }) {
    return (
        <>
            <div className="border-2 border-purple-800 py-3 px-5 w-full flex-1">
                <div className="form-input-wrapper w-1/2">
                    <label for="cardHolderName">Kart Sahibinin Adı Soyadı</label>
                    <input
                        name="cardHolderName"
                        type="text"
                        placeholder="Ad soyad"
                        className={`border w-full py-1.5 rounded-md pl-2 focus:outline-none segoe mt-1`}
                        onChange={setInputs}
                        value={inputs.cardHolderName}
                    />
                </div>

                <div className="form-input-wrapper w-1/2 mt-2">
                    <label for="cardNumber">Kart Numarası</label>
                    <input
                        name="cardNumber"
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className={`border w-full py-1.5 rounded-md pl-2 focus:outline-none segoe mt-1`}
                        onChange={setInputs}
                        value={inputs.cardNumber}
                    />
                </div>

                <div className="w-1/2">
                    <div className="form-input-wrapper w-1/3 mt-2 inline-block pr-2">
                        <label for="expireMonth">Ay</label>
                        <input
                            name="expireMonth"
                            type="text"
                            className={`border w-full py-1.5 rounded-md pl-2 focus:outline-none segoe mt-1`}
                            placeholder="00"
                            onChange={setInputs}
                            value={inputs.expireMonth}
                        />
                    </div>

                    <div className="form-input-wrapper w-1/3 mt-2 inline-block pr-2">
                        <label for="expireYear">Yıl</label>
                        <input
                            name="expireYear"
                            type="text"
                            className={`border w-full py-1.5 rounded-md pl-2 focus:outline-none segoe mt-1`}
                            placeholder="2035"
                            onChange={setInputs}
                            value={inputs.expireYear}
                        />
                    </div>

                    <div className="form-input-wrapper w-1/3 mt-2 inline-block">
                        <label for="cvc">Cvc</label>
                        <input
                            name="cvc"
                            type="text"
                            className={`border w-full py-1.5 rounded-md pl-2 focus:outline-none segoe mt-1`}
                            placeholder="999"
                            onChange={setInputs}
                            value={inputs.cvc}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
