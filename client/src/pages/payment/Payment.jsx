import React, { useState } from 'react'
import { addToBalance } from '../../services/api'
import { useNavigate } from 'react-router'
import "../payment/payment.css"

function Payment() {
    const navigate = useNavigate();
    const [balance, setBalance] = useState("");
    const [fullName, setFullName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiration, setExpiration] = useState("");
    const [cvv, setCvv] = useState("");
    const [error, setError] = useState("");

    function verifyInputs() {
        if (!balance || balance <= 0) {
            setError("Please enter a valid deposit amount.");
            return false;
        }
        if (!fullName.trim()) {
            setError("Please enter your full name.");
            return false;
        }
        if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, ""))) {
            setError("Please enter a valid 16-digit card number.");
            return false;
        }
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiration)) {
            setError("Please enter a valid expiration date (MM/YY).");
            return false;
        }
        if (!/^\d{3}$/.test(cvv)) {
            setError("Please enter a valid 3-digit CVV.");
            return false;
        }
        setError("");
        return true;
    }

    async function addDeposit(e) {
        e.preventDefault();
        if (!verifyInputs()) return;

        const id = localStorage.getItem("userid");
        const pul = await addToBalance(id, balance);
        localStorage.setItem("balance", pul.balance)
        
        navigate('/dashboard');
    }

    return (
        <section className="fixed inset-0 flex justify-center items-center h-screen bg-white py-8 antialiased dark:bg-gray-900 md:py-16 payment">
            <div className="w-[90%] mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mx-auto text-center">
                    <h2 className="text-xl pb-[20px] font-semibold text-gray-900 dark:text-white sm:text-2xl">
                        Payment
                    </h2>
                    {error && (
                        <p className="text-red-500 mb-4">{error}</p>
                    )}
                    <div className="flex flex-col items-center gap-[20px]">
                        <div className="mt-6 grow sm:mt-8 lg:mt-0">
                            <div className="mt-6 flex items-center justify-center gap-8">
                                <div className="">
                                    <label style={{
                                        paddingBottom:"10px",
                                      
                                    }} htmlFor="balance" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        Write the quantity!
                                    </label>
                                    <input
                                    style={{padding:"5px"}}
                                    
                                        onChange={(e) => setBalance(e.target.value)}
                                        type="number"
                                        id="balance"
                                        className="block w-full min-w-[300px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        placeholder="Dosage amount"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <form
                            style={{ padding: 20, marginLeft: 0 }}
                            action="#"
                            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8"
                        >
                            <div className="mb-6 grid grid-cols-2 gap-4">
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        Full name (as displayed on card)*
                                    </label>
                                    <input
                                        type="text"
                                        id="full_name"
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        placeholder="Bonnie Green"
                                        required
                                    />
                                </div>
                                <div className="col-span-2 sm:col-span-1 card-number">
                                    <label htmlFor="card-number-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        Card number*
                                    </label>
                                    <input
                                        type="text"
                                        id="card-number-input"
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        placeholder="xxxx-xxxx-xxxx-xxxx"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="card-expiration-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        Card expiration*
                                    </label>
                                    <input
                                        id="card-expiration-input"
                                        type="text"
                                        onChange={(e) => setExpiration(e.target.value)}
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        placeholder="MM/YY"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cvv-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        CVV*
                                    </label>
                                    <input
                                        type="number"
                                        id="cvv-input"
                                        onChange={(e) => setCvv(e.target.value)}
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                        placeholder="•••"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                            style={{marginTop:"30px"}}
                                onClick={addDeposit}
                                type="submit"
                                className="flex w-full min-h-[50px] bg-[green] items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white"
                            >
                                Pay now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Payment;
